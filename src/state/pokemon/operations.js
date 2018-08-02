import * as RxDB from 'rxdb';
import { schema } from './../../db/Schema';

//Electron setup
const electron = window.require('electron');
const fs = electron.remote.require('fs');
const app = electron.remote.app;

RxDB.plugin(require('pouchdb-adapter-idb'));

const dbName = 'carddb';

function onlyUniqueSet(value, index, self) {
    return self.indexOf(value) === index;
}

async function loadDatabaseOperation(cb) {
    await RxDB.removeDatabase('carddb', 'idb');

    // password must have at least 8 characters
    const db = await RxDB.create(
      {name: dbName, adapter: 'idb', password: '12345678'}
    );
    console.dir(db);

    // show who's the leader in page's title
    db.waitForLeadership().then(() => {
      document.title = '♛ ' + document.title;
    });

    // create collection
    await db.collection({
      name: 'cards',
      schema: schema
    });

    const appPath = app.getAppPath();
    console.log(appPath);

    const data = JSON.parse(fs.readFileSync(appPath + '/data/data.json', 'utf-8'));
    await db.cards.pouch.bulkDocs(data.cards);

    var allSets = data.cards.map(card => card.setCode);
    var sets = allSets.filter( onlyUniqueSet );
    sets.sort()

    cb(null, {db, sets});
}

async function executeQuery(query, db, cb) {
    await db.cards.find(query)
        .exec()
        .then(documents => cb(null, documents));
}

export {
    loadDatabaseOperation,
    executeQuery
}
