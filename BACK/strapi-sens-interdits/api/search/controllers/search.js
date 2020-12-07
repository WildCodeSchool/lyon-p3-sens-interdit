'use strict';
const Search = require('../../../library/Search');
// TODO add limit params
module.exports = {
  // GET /search
  async index(ctx) {
    if (ctx.req._parsedUrl.query.search('s=') > -1) {
      const searchString = ctx.req._parsedUrl.query.replace('s=','').trim();
      let results = await Search.search(searchString);
      console.log(0);
      console.log('*****************');
      console.log(results);
      console.log('*****************');
      ctx.send({error: null, results});
    } else {
      ctx.send({error: '?s= is missing'})
    }
  },
};
