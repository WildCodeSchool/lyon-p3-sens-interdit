'use strict';
const {dataToSearch} = require('../../library/helpers/string');
const {db, query} = require('../../library/Mysql');
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
            try {
              let results = await query('DESCRIBE '+table);
              let fields = results
                .filter(elem => elem.Type.search(/ext/) > -1 || elem.Type.search(/char/) > -1)
                .map(elem => elem.Field);
              let fieldsStr = fields.join(',');
              if (method === 'POST') {
                results = await query(`SELECT id,${fieldsStr} FROM ${table} ORDER BY id DESC LIMIT 1`, id);
                let result = results[0]
                let id = parseInt(result.id) + 1;
                delete result.id;
                let search = dataToSearch(result);
                const data = {search, api_id: table, content_id: id};
                await db.query(`INSERT INTO search SET ?`, data)
              } else {
                results = await query(`SELECT ${fieldsStr} FROM ${table} WHERE id=?`, id);
                let search = dataToSearch(results[0]);
                await query(`UPDATE search SET search=? WHERE api_id=? AND content_id=?`, [search, table, id]);
              }
            } catch(err) {
              let error = new Error(err)
              console.log(error);
              throw error;
            }
          }
        }
        await next();
      });
    },
  };
};
