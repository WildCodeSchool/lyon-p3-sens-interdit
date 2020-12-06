'use strict';
const async = require('async');
const {query} = require('./Mysql');
const {dataToSearch} = require('./utils/string');
const tablesConfig = require('../config/searchTables');
const searchTable = 'search';

class SearchIndexer {
  /**
   *
   * @param table
   * @returns {Promise<*>}
   */
  static async getFields(table) {
    let results = await query('DESCRIBE ' + table);
    let fields = results
      .filter(elem => elem.Type.search(/ext/) > -1 || elem.Type.search(/char/) > -1)
      .filter(elem => elem.Field.slice(-3) !== '_en') // TODO remove when full translations are done
      .map(elem => elem.Field);
    return fields.join(',');
  }

  /**
   *
   * @param table
   * @param fieldsStr
   * @returns {Promise<void>}
   */
  static async createIndex(table, fieldsStr) {
    let results = await query(`SELECT id,${fieldsStr} FROM ${table} ORDER BY id DESC LIMIT 1`);
    let result = results[0]
    let id = parseInt(result.id) + 1;
    delete result.id;
  console.log('table', table);
  console.log('id', id);

    let search = dataToSearch(result);
    const data = {search, api_id: table, content_id: id};
    await query('INSERT INTO ' + searchTable + ' SET ?', data)
  }

  /**
   *
   * @param table
   * @param fieldsStr
   * @returns {Promise<void>}
   */
  static async createIndexBulk(table, fieldsStr) {
    let results = await query(`SELECT id,${fieldsStr} FROM ${table} ORDER BY id ASC`);
    results.forEach(result => {
      let id = parseInt(result.id);
      delete result.id;
      //console.log(result);
      let search = dataToSearch(result);
      const data = {search, api_id: table, content_id: id};
      query('INSERT INTO ' + searchTable + ' SET ?', data)
    })
  }
  static loopOnTablesToIndex(tablesFields, next) {
    async.eachOfLimit(tablesFields, 1,
      (fields, table, callback) => {
      SearchIndexer.createIndexBulk(table, fields);
      callback();
    }, (err) => {
      if (err) {
        throw new Error(err);
      } else {
        next();
      }
    })
  }

  /**
   *
   * @param table
   * @param id
   * @param fieldsStr
   * @returns {Promise<void>}
   */
  static async updateIndex(table, id, fieldsStr) {
    let results = await query(`SELECT ${fieldsStr} FROM ${table} WHERE id=?`, id);
    let search = dataToSearch(results[0]);
    await query('UPDATE ' + searchTable + ' SET search=? WHERE api_id=? AND content_id=?', [search, table, id]);
  }

  /**
   *
   * @param table
   * @returns {boolean}
   */
  static isIndexable(table) {
    return tablesConfig[table] !== undefined
  }

  /**
   *
   */
  static clearIndexes() {
    query('TRUNCATE ' + searchTable)
  }

  /**
   *
   * @returns {{}}
   */
  static getTablesList() {
    let tables = {};
    for (let i in tablesConfig) {
      tables[i] = [];
    }
    return tables;
  }

  /**
   *
   * @param tables
   * @param next
   */
  static setFieldsOnTables(tables, next) {
    async.eachOf(
      tables,
      (ids, table, callback) => {
        if (table === 'archives_olds') {
          tables['archives_olds'] = [
            'pays','titre','credits_1','credits_2','credits_3','credits_4','credits_5','credits_6','presentation',
            'lieu','soutien','credits_7','credits_8','credits_10','credits_11','presse','credits_12','credits_13',
            'credits_14','credits_15','credits_16','titre_level_3','titre_level_2','credits_17','acceuil_residence'
          ].join(',');
          callback();
        } else {
          SearchIndexer.getFields(table).then(fields => {
            tables[table] = fields;
            callback();
          }).catch(err => {
            console.log(err);
            callback(err);
          })
        }
      },
      (err) => {
        if (err) {
          throw new Error(err);
        } else {
          next(tables);
        }
      })
  }
}

module.exports = SearchIndexer;
