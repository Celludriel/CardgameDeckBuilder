import types from "./types";

const startLoadDatabaseAction = () => ({
    type: types.START_LOAD_DATABASE
});

const loadDatabaseAction = () => ({
    type: types.LOAD_DATABASE
});

const endLoadDatabaseAction = (db) => ({
    type: types.END_LOAD_DATABASE,
    payload: {
        db
    }
});

export {
    startLoadDatabaseAction,
    loadDatabaseAction,
    endLoadDatabaseAction
};
