import * as RxDB from 'rxdb';
import { schema } from './../../db/Schema';

//Electron setup
const electron = window.require('electron');
const fs = electron.remote.require('fs');
const path = electron.remote.require('path')
const https = electron.remote.require('https');
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


fs.isDir = function(dpath) {
    try {
        return fs.lstatSync(dpath).isDirectory();
    } catch(e) {
        return false;
    }
};

fs.mkdirp = function(dirname) {
    dirname = path.normalize(dirname).split(path.sep);
    dirname.forEach((sdir,index)=>{
        var pathInQuestion = dirname.slice(0,index+1).join(path.sep);
        if((!fs.isDir(pathInQuestion)) && pathInQuestion) fs.mkdirSync(pathInQuestion);
    });
};

function getCardImageLocation(card){
    let directory = app.getPath('userData') + "/cards/" + card.setCode + "/"
    let dest = directory + card.number + ".png";

    const fileExists = fs.existsSync(dest);

    if(fileExists){
        return new Promise((resolve, reject) => {
            resolve({imageLocation: dest});
        })
    } else {
        let url = card.imageUrl;

        return new Promise((resolve, reject) => {
            fs.mkdirp(directory);
            const file = fs.createWriteStream(dest, { flags: "w" });

            const request = https.get(url, response => {
                if (response.statusCode === 200) {
                    response.pipe(file);
                } else {
                    file.close();
                    fs.unlink(dest, () => {}); // Delete temp file
                    reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
                }
            });

            request.on("error", err => {
                file.close();
                fs.unlink(dest, () => {}); // Delete temp file
                reject(err.message);
            });

            file.on("finish", () => {
                resolve({imageLocation: dest});
            });

            file.on("error", err => {
                file.close();

                if (err.code === "EEXIST") {
                    reject("File already exists");
                } else {
                    fs.unlink(dest, () => {}); // Delete temp file
                    reject(err.message);
                }
            });
        });
    }
}

function getAvailableDecknames(){
    let directory = app.getPath('userData') + "/decks";
    let decknames = [];
    var files = fs.readdirSync(directory);
    if(files !== undefined){
        files.forEach(function(file) {
            decknames.push(file.replace(/\.[^/.]+$/, ""));
        })
    }
    return decknames;
}

function saveDeckToDisk(deck){
    let directory = app.getPath('userData') + "/decks";
    let filename = directory + "/" + deck.name + ".json";
    let content = JSON.stringify(deck);

    try {
        fs.writeFileSync(filename, content, 'utf-8');
    }
    catch(e) {
        console.log(e);
    }
}

function deleteDeckFromDisk(deck){
    let directory = app.getPath('userData') + "/decks";
    let filename = directory + "/" + deck.name + ".json";

    try {
        fs.unlinkSync(filename);
    } catch(e) {
        console.log(e);
    }
}

function loadDeckFromDisk(deckname){
    let directory = app.getPath('userData') + "/decks";
    let filename = directory + "/" + deckname + ".json";

    try {
      fs.accessSync(filename, fs.constants.R_OK);
      return JSON.parse(fs.readFileSync(filename, 'utf-8'));
    } catch (err) {
      console.log(err);
      return {"name": deckname, "cards": []};
    }
}

export {
    loadDatabaseOperation,
    executeQuery,
    getCardImageLocation,
    getAvailableDecknames,
    saveDeckToDisk,
    loadDeckFromDisk,
    deleteDeckFromDisk
}
