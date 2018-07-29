import types from "./types";

const startLoadDatabase = () => ({
    type: types.START_LOAD_DATABASE
});

const loadDatabase = () => ({
    type: types.LOAD_DATABASE
});

const endLoadDatabase = (db) => ({
    type: types.END_LOAD_DATABASE,
    payload: {
        db
    }
});

export default {
    startLoadDatabase,
    loadDatabase,
    endLoadDatabase
};
