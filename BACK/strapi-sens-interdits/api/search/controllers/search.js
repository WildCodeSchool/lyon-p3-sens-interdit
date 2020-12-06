'use strict';
const Search = require('../../../library/Search');
const S = new Search();
// TODO add limit params
module.exports = {
  // GET /search
  async index(ctx) {
    if (ctx.req._parsedUrl.query.search('s=') > -1) {
      const searchString = ctx.req._parsedUrl.query.replace('s=','').trim();
      let results = await S.search(searchString);
      ctx.send({error: null, results});
    } else {
      ctx.send({error: '?s= is missing'})
    }
  },
};
