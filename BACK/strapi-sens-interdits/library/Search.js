'use strict';
const async = require('async');
const {query} = require('./Mysql');
const {stringSearch} = require('./helpers/string');
const {sluggify} = require('./helpers/string');
const tablesConfig = require('../api/search/config/tables');

class Search {
  searchString = '';
  tables = {};
  MIN_CHARS = 1;
  dbResults = [];
  searchResults = [];

  constructor() {
  }

  async search(searchString) {
    this.searchString = searchString
    let resultsFinal = [];
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
        let allResults = [...results, ...results2];
        this.buildApiContentResult(allResults);
        await this.getResults();
        this.buildResults();
      } catch (err) {
        let error = new Error(err)
        console.log(error);
        throw error;
      }
    }
    return this.searchResults;
  }

  async getResults() {
    let request = 'SELECT #fields# FROM #table# WHERE id IN ? ORDER BY id DESC;';
    await async.forEachOf(
      this.tables,
      (ids, table, callback) => {
        let config = tablesConfig[table];
        let fields = ['id', 'created_at'];
        if (config[table].title !== '') {
          fields.push(config[table].title)
        }
        if (config[table].description !== '') {
          fields.push(config[table].description)
        }
        fields = fields.join(',');
        request = request.replace('#fields#', fields).replace('#table', table);
        query(request, ids).then(results => {
          results.forEach(result => {
            result['table'] = table;
            this.dbResults.push(result);
          });
          callback();
        }).catch(err => {
          let error = new Error(err)
          console.log(error);
          callback(err)
        });
      },
      (err) => {
        if (err) {
          let error = new Error(err)
          console.log(error);
          throw error;
        } else {
          return true;
        }
      })
  }

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

  buildApiContentResult(allResults) {
    if (allResults > 0) {
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

  buildResults() {
    if (this.dbResults.length > 0) {
      // TODO order result by created_at
      this.dbResults.forEach(result => {
        let config = tablesConfig[result.table];
        let searchResult = {
          url: `${config.slug}${sluggify(result.title)}_${id}`,
          title: result.title,
          description: result.description
        }
        this.searchResults.push(searchResult);
      })
    }
  }
}

module.exports = new Search();
