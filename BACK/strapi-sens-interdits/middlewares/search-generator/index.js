'use strict';
const Search = require('../../library/Search');
// TODO : to be changed, cuz of the multilingual modifications
module.exports = strapi => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        const method = ctx.request.method;
        if ((method === 'POST' || method === 'PUT') && ctx.request.url !== undefined) {
          let url = ctx.request.url.split('::');
          if (url[1] !== undefined) {
            let tableString = url[1].split('.');
            let table = tableString[0]+'s';
            let id = (tableString[1] !== undefined) ? tableString[1].split("/")[1] : null;
            if (Search.isIndexable(table)) {
              try {
                let fieldsStr = await Search.getFields(table);
                if (method === 'POST') {
                  await Search.createIndex(table, fieldsStr);
                } else {
                  await Search.updateIndex(table, id, fieldsStr);
                }
              } catch (err) {
                let error = new Error(err)
                console.log(error);
                throw error;
              }
            }
          }
        }
        await next();
      });
    },
  };
};
