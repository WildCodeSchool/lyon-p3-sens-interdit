const Indexer = require('../SearchIndexer');

async function index() {
  try {
    Indexer.clearIndexes();

    let tables = Indexer.getTablesList();

    await Indexer.setFieldsOnTables(tables, (tablesFields) => {
      console.log(tablesFields);
      Indexer.loopOnTablesToIndex(tablesFields, () => {
        console.log('done');
      })
      return tablesFields;
    });
  } catch(err) {
    throw new Error(err);
  }
}

index();
