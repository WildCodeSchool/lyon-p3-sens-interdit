'use strict';
require('dotenv').config();
const async = require('async');
const {query} = require('./Mysql');
const {stringSearch, sluggify} = require('./utils/string');
const tablesConfig = require('../config/searchTables');

// TODO : Lang, order by score, add limit params
const searchTable = 'search';

class Search {
  searchString = '';
  searchTable = '';
  tables = {};
  MIN_CHARS = process.env.SEARCH_MIN_CHARS || 4;
  dbResults = [];
  searchResults = [];

  constructor() {
    this.searchTable = searchTable;
  }

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
        'FROM ' + this.searchTable + ' WHERE (MATCH (search) AGAINST (? IN BOOLEAN MODE)) ' +
        'ORDER BY score DESC';
      try {
        let results = await query(sql, attr);
        let results2 = [];
        if (results.length < 9 && hasSpace) {
          results2 = await query(sql, attr2);
        }
        let allResults = [...results2, ...results];
        this.buildApiContentResult(allResults);
        results = await this.getResults();
        return this.buildResults(this.dbResults);
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
   * @returns {Promise<unknown>}
   */
  getResults(/*next*/) {
    return new Promise((resolve, reject) => {
      // TODO : graphql to get images !
      // console.log('this.tables', this.tables);
      async.eachOfLimit(
        this.tables,
        4,
        (ids, table, callback) => {
          let request = 'SELECT #fields# FROM #table# WHERE id IN (?) ORDER BY id DESC;';
          let config = tablesConfig[table];
          // console.log(table);
          // console.log(config);
          if (config === undefined) {
            callback(table + ' is not in config/searchTables config');
          }
          let fields = ['id', 'created_at'];
          if (config.title !== '' && config.title !== null) {
            fields.push(config.title)
          }
          if (config.description !== '' && config.description !== null) {
            fields.push(config.description)
          }

          fields = fields.join(',');
          request = request.replace('#fields#', fields).replace('#table#', table);
          query(request, [ids]).then(results => {
            // console.log('a');
            results.forEach(result => {
              // console.log('b');
              result['table'] = table;
              this.dbResults.push(result);
            });
            callback(null);
          }).catch(err => {
            console.log(err);
          });
        },
        (err) => {
          if (err) {
            reject(new Error(err));
          } else {
            // console.log('return results', this.dbResults);
            resolve(this.dbResults);
            //next(this.dbResults);
          }
        })
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
      // console.log('buildResults', results);
      let url = '';
      results.forEach(result => {
        let config = tablesConfig[result.table];
        url = '';
        if (result.table === 'archives_olds') {
          url = '/archives-old-' + result.id;
        } else {
          if (result.title === undefined) {
            result.title = result.table;
          }
          url = `${config.slug}`;
          if (config.slug.slice(-1) === '/') {
            url += `${config.slug}${sluggify(result.title)}_${result.id}`;
          }
        }
        let searchResult = {
          url,
          title: result.title || result.titre,
          description: result[config.description]
        }
        this.searchResults.push(searchResult);
      })

      return this.searchResults;
    }
  }


}

module.exports = new Search();
