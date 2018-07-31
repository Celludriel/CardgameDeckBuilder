import types from "./types";

const startLoadDatabaseAction = () => ({
    type: types.START_LOAD_DATABASE
});

const endLoadDatabaseAction = (db) => ({
    type: types.END_LOAD_DATABASE,
    payload: {
        db
    }
});

const startQueryAction = (query, db) => ({
    type: types.START_QUERY,
    payload: {
        query,
        db
    }
});

const endQueryAction = (db) => ({
    type: types.END_QUERY,
    payload: {
        db
    }
});

export {
    startLoadDatabaseAction,
    endLoadDatabaseAction,
    startQueryAction,
    endQueryAction
};
