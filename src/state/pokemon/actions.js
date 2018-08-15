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
    type: types.START_SELECT_CARD,
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

const startSaveDeckAction = () => ({
    type: types.SAVE_DECK
});

const startDeleteDeckAction = () => ({
    type: types.DELETE_DECK
});

const selectDeckAction = (deckname) => ({
    type: types.START_SELECT_DECK,
    payload: {
        deckname
    }
});

const addCardToDeckAction = (cardId) => ({
    type: types.ADD_CARD_TO_DECK,
    payload: {
        cardId
    }
});

const removeCardFromDeckAction = (cardId) => ({
    type: types.REMOVE_CARD_FROM_DECK,
    payload: {
        cardId
    }
});

const updateDeckFilterAction = (event) => ({
    type: types.DECK_FILTER_UPDATE,
    payload: {
        event
    }
});

export {
    startLoadDatabaseAction,
    endLoadDatabaseAction,
    startQueryAction,
    endQueryAction,
    selectCardAction,
    startLoadDecksAction,
    endLoadDecksAction,
    startSaveDeckAction,
    startDeleteDeckAction,
    selectDeckAction,
    addCardToDeckAction,
    removeCardFromDeckAction,
    updateDeckFilterAction
};
