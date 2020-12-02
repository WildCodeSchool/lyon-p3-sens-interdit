function toSearch(data) {
  let str = '';
  for (let i in data) {
    str += data[i].toLowerCase();
  }
  return str;
}
module.exports = strapi => {
  return {
    // can also be async
    initialize() {
      strapi.app.use(async (ctx, next) => {
        // await someAsyncCode()
        console.log('Coucou')
        const method = ctx.request.method;
        if ((method === 'POST' || method === 'PUT') && ctx.request.url !== undefined) {
          let url = ctx.request.url.split('::');
          if (url[1] !== undefined) {
            let tableString = url[1].split('.');
            let table = tableString[0];
            let id = (tableString[1] !== undefined) ? tableString[1].split("/")[1] : null;
            // 1 recuperer la structure de la table pour isoler les champs text, varchar, text-long

            if (method === 'POST') {
              // recuperer le last inserted id, ou le last inserted id + 1
              // 2 data = SELECT id + les_champs FROM latable ORDER BY id DESC LIMIT 1
              // inserer une nouvelle ligne dans search "toSearch(data)"
            } else {
              // 2 data = SELECT les_champs FROM latable WHERE id=id
              // 3 search = SELECT id FROM search WHERE api_id=table AND content_id=id
              // update latable "toSearch(data)"
            }

          }
        }

        await next();

        // await someAsyncCode()
      });
    },
  };
};
