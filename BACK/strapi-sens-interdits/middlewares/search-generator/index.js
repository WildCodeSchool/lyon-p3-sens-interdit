'use strict';
const {dataToSearch} = require('../../library/helpers/string');
const {db, query} = require('../../library/Mysql');
// TODO : to be changed, cuz of the multilingual modifications
module.exports = strapi => {
  return {
    // can also be async
    initialize() {
      strapi.app.use(async (ctx, next) => {
        // not async here cuz of the
        const method = ctx.request.method;
        if ((method === 'POST' || method === 'PUT') && ctx.request.url !== undefined) {
          let url = ctx.request.url.split('::');
          if (url[1] !== undefined) {
            let tableString = url[1].split('.');
            let table = tableString[0]+'s';
            let id = (tableString[1] !== undefined) ? tableString[1].split("/")[1] : null;
            db.query('DESCRIBE '+table, (err, results) => {
              if(err) {
                throw new Error(err);
              } else {
                let fields = results
                  .filter(elem => elem.Type.search(/ext/) > -1 || elem.Type.search(/char/) > -1)
                  .map(elem => elem.Field);
                let fieldsStr = fields.join(',');

                if (method === 'POST') {
                  db.query(`SELECT id,${fieldsStr} FROM ${table} ORDER BY id DESC LIMIT 1`, id, (err, results) => {
                    if (err) {
                      throw new Error(err);
                    } else {
                      let result = results[0]
                      let id = parseInt(result.id) + 1;
                      delete result.id;
                      let search = dataToSearch(result);
                      const data = {search, api_id: table, content_id: id};
                      db.query(`INSERT INTO search SET ?`, data)
                    }

                  });
                } else if(method === 'PUT') {
                  db.query(`SELECT ${fieldsStr} FROM ${table} WHERE id=?`, id, (err, results) => {
                    if (err) {
                      throw new Error(err);
                    } else {
                      let search = dataToSearch(results[0]);
                      db.query(`UPDATE search SET search=? WHERE api_id=? AND content_id=?`, [search, table, id]);
                    }
                  });
                }
              }
            });

          }
        }

        await next();
      });
    },
  };
};
