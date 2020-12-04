'use strict';
const {stringSearch} = require('../../../library/helpers/string');
const {db, query} = require('../../../library/Mysql');
module.exports = {
  // GET /search
  async index(ctx) {
    if (ctx.req._parsedUrl.query.search('s=') > -1) {
      const searchString = ctx.req._parsedUrl.query.replace('s=','').trim();
      const results = [];
      if (searchString.length > 4) {
        results = await query('SELECT ');
        results.push(stringSearch(searchString));
      }
      ctx.send({error: null, results});
    } else {
      ctx.send({error: '?s= is missing'})
    }
  },
};

const search = async (str) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT api_id, content_id FROM search WHERE ')
  });



};
