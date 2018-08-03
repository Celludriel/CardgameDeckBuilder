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

const selectCardAction = (cardId) => ({
    type: types.SELECT_CARD,
    payload: {
        cardId
    }
});

const startLoadDecksAction = () => ({
    type: types.START_LOAD_DECKS
});

const endLoadDecksAction = (decknames) => ({
    type: types.END_LOAD_DECKS,
    payload: {
        decknames
    }
});

export {
    startLoadDatabaseAction,
    endLoadDatabaseAction,
    startQueryAction,
    endQueryAction,
    selectCardAction,
    startLoadDecksAction,
    endLoadDecksAction
};
