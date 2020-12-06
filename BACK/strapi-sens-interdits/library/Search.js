'use strict';
require('dotenv').config();
const async = require('async');
const {query} = require('./Mysql');
const {stringSearch, dataToSearch} = require('./helpers/string');
const {sluggify} = require('./helpers/string');
const tablesConfig = require('../config/searchTables');
// TODO : Lang, order by score, add limit params

class Search {
  searchString = '';
  tables = {};
  MIN_CHARS = process.env.SEARCH_MIN_CHARS || 4;
  dbResults = [];
  searchResults = [];

  constructor() {}

  /**
   *
   * @param searchString
   * @returns {Promise<*[]>}
   */
  async search(searchString) {
    this.searchString = searchString
    if (this.searchString.length > this.MIN_CHARS) {
      this.searchString = stringSearch(this.searchString);
      let hasSpace = this.searchString.search(' ') > -1;
      const {attr, attr2} = this.buildQueryAttributes();

      let sql = 'SELECT api_id, content_id, MATCH(search) AGAINST (? IN BOOLEAN MODE) as score ' +
        'FROM search WHERE (MATCH (search) AGAINST (? IN BOOLEAN MODE)) ' +
        'ORDER BY score DESC';
      try {
        let results = await query(sql, attr);
        let results2 = [];
        if (results.length < 9 && hasSpace) {
          results2 = await query(sql, attr2);
        }
        let allResults = [...results2, ...results];
        this.buildApiContentResult(allResults);
        this.getResults(results => {
          this.buildResults(results);
          return this.searchResults;
        });
      } catch (err) {
        let error = new Error(err)
        console.log(error);
        throw error;
      }
    } else {
      return [];
    }
  }

  /**
   *
   * @param next
   */
  getResults(next) {
    // TODO : graphql
    async.forEachOf(
      this.tables,
      (ids, table, callback) => {
        let request = 'SELECT #fields# FROM #table# WHERE id IN (?) ORDER BY id DESC;';
        let config = tablesConfig[table];
        let fields = ['id', 'created_at'];
        if (config.title !== '') {
          fields.push(config.title)
        }
        if (config.description !== '') {
          fields.push(config.description)
        }
        fields = fields.join(',');
        request = request.replace('#fields#', fields).replace('#table#', table);
        query(request, [ids]).then(results => {
          results.forEach(result => {
            result['table'] = table;
            this.dbResults.push(result);
          });
          callback(null);
        }).catch(err => {
          callback(err)
        });
      },
      (err) => {
        if (err) {
          throw new Error(err);
        } else {
          next(this.dbResults);
        }
      })
  }

  /**
   *
   * @returns {{attr: [string, string], attr2: [string, string]}}
   */
  buildQueryAttributes() {
    let searchMatch2 = this.searchString.replace(' ', '') + '*';
    let search = this.searchString.split(' ');
    let searchMatch = '';
    if (this.searchString.length > 1) {
      search.forEach(elem => {
        if (elem !== ' ') searchMatch += '+' + elem + '* ';
      });
    } else {
      searchMatch = search[0] + '*';
    }
    let attr = [searchMatch, searchMatch];
    let attr2 = [searchMatch2, searchMatch2];

    return {attr, attr2};
  }

  /**
   *
   * @param allResults
   */
  buildApiContentResult(allResults) {
    if (allResults.length > 0) {
      allResults.forEach(elem => {
        if (elem.api_id.slice(-1) !== 's') {
          elem.api_id += 's';
        }
        if (this.tables[elem.api_id] !== undefined) {
          this.tables[elem.api_id].push(elem.content_id);
        } else {
          this.tables[elem.api_id] = [elem.content_id];
        }
      });
    }
  }

  /**
   *
   * @param results
   */
  buildResults(results) {
    if (results.length > 0) {
      // TODO order result by created_at
      results.forEach(result => {
        let config = tablesConfig[result.table];
        let url = '';
        if (result.table === 'archives_olds') {
          url = 'archives-old-' + result.id;
        } else {
          url = `${config.slug}${sluggify(result.title)}_${result.id}`;
        }
        let searchResult = {
          url,
          title: result.title,
          description: result[config.description]
        }
        this.searchResults.push(searchResult);
      })
    }
  }

  /*************************************************/
  /**************** Indexer part *******************/
  async static getFields(table) {
    let results = await query('DESCRIBE '+table);
    let fields = results
      .filter(elem => elem.Type.search(/ext/) > -1 || elem.Type.search(/char/) > -1)
      .filter(elem => elem.Field.slice(-3) !== '_en') // TODO remove when full translations are done
      .map(elem => elem.Field);
    return fields.join(',');
  }

  async static createIndex(table, fieldsStr) {
    let results = await query(`SELECT id,${fieldsStr} FROM ${table} ORDER BY id DESC LIMIT 1`, id);
    let result = results[0]
    let id = parseInt(result.id) + 1;
    delete result.id;
    let search = dataToSearch(result);
    const data = {search, api_id: table, content_id: id};
    await query(`INSERT INTO search SET ?`, data)
  }

  async static updateIndex(table, id, fieldsStr) {
    await Search.updateIndex(table, id, fieldsStr);
    let results = await query(`SELECT ${fieldsStr} FROM ${table} WHERE id=?`, id);
    let search = dataToSearch(results[0]);
    await query(`UPDATE search SET search=? WHERE api_id=? AND content_id=?`, [search, table, id]);
  }

  static isIndexable(table) {
    return tablesConfig[table] !== undefined
  }
}

module.exports = Search;
