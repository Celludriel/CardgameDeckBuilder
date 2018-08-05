import { put, takeLatest, cps, select, call } from 'redux-saga/effects'
import types from "./types"
import { loadDatabaseOperation, executeQuery, getCardImageLocation,
    getAvailableDecknames, saveDeckToDisk, loadDeckFromDisk,
    deleteDeckFromDisk, findCardById, addCardToDeck,
    removeCardFromDeck } from "./operations"
import { getCurrentDeck, getDb } from '../../state/pokemon/selectors';

export function* loadDatabase() {
    try {
        const endLoadDb = yield cps(loadDatabaseOperation);
        const payload = yield cps(executeQuery, {}, endLoadDb.db);
        yield cps(findCardById, "base1-1", endLoadDb.db);
        yield put({ type: types.END_QUERY, payload });
        yield put({ type: types.END_LOAD_DATABASE, endLoadDb });
    } catch (err) {
        console.log(err);
    }
}

export function* doQuery(action) {
    try {
        const { query, db } = action.payload;
        const payload = yield cps(executeQuery, query, db);
        yield put({ type: types.END_QUERY, payload });
    } catch (err) {
        console.log(err);
    }
}

export function* selectOrSaveImage(action) {
    try {
        let card = action.card
        const cardimage = yield call(getCardImageLocation, card);
        const payload = {
            "card": card,
            "cardimage": cardimage
        }
        yield put({ type: types.END_SELECT_CARD, payload });
    } catch (err) {
        console.log(err);
    }
}

export function* loadDecks() {
    try {
        const payload = yield call(getAvailableDecknames);
        yield put({ type: types.END_LOAD_DECKS, payload });
    } catch (err) {
        console.log(err);
    }
}

export function* saveDeck() {
    try {
        let currentDeck = yield select(getCurrentDeck);
        if(currentDeck.name !== ""){
            yield call(saveDeckToDisk, currentDeck);
            yield put({ type: types.START_LOAD_DECKS });
        }
    } catch (err) {
        console.log(err);
    }
}

export function* deleteDeck() {
    try {
        let currentDeck = yield select(getCurrentDeck);
        if(currentDeck.name !== ""){
            yield call(deleteDeckFromDisk, currentDeck);
            yield put({ type: types.START_LOAD_DECKS });
        }
    } catch (err) {
        console.log(err);
    }
}

export function* selectDeck(selectedDeck) {
    try {
        if(selectedDeck.payload.deckname !== null){
            let payload = loadDeckFromDisk(selectedDeck.payload.deckname.value);
            yield put({ type: types.END_SELECT_DECK, payload });
        } else {
            let payload = {"name": "", "cards": []};
            yield put({ type: types.END_SELECT_DECK, payload });
        }
    } catch (err) {
        console.log(err);
    }
}

export function* selectCard(action) {
    try {
        const { cardId } = action.payload;
        let db = yield select(getDb);
        const card = yield cps(findCardById, cardId, db);
        yield put({ type: types.SET_CARD_IMAGE, card });
    } catch (err) {
        console.log(err);
    }
}

export function* doAddCardToDeck(action) {
    try {
        const { cardId } = action.payload;
        let db = yield select(getDb);
        const card = yield cps(findCardById, cardId, db);
        let deck = yield select(getCurrentDeck);
        const payload = yield call(addCardToDeck, card, deck.cards)
        yield put({ type: types.DECK_UPDATE, payload });
    } catch (err) {
        console.log(err);
    }
}

export function* doRemoveCardFromDeck(action) {
    try {
        const { cardId } = action.payload;
        let db = yield select(getDb);
        const card = yield cps(findCardById, cardId, db);
        let deck = yield select(getCurrentDeck);
        const payload = yield call(removeCardFromDeck, card, deck.cards)
        yield put({ type: types.DECK_UPDATE, payload });
    } catch (err) {
        console.log(err);
    }
}

export function* pokemonSaga() {
  yield [
      takeLatest(types.START_LOAD_DATABASE, loadDatabase),
      takeLatest(types.START_LOAD_DECKS, loadDecks),
      takeLatest(types.START_QUERY, doQuery),
      takeLatest(types.SAVE_DECK, saveDeck),
      takeLatest(types.DELETE_DECK, deleteDeck),
      takeLatest(types.START_SELECT_DECK, selectDeck),
      takeLatest(types.START_SELECT_CARD, selectCard),
      takeLatest(types.SET_CARD_IMAGE, selectOrSaveImage),
      takeLatest(types.ADD_CARD_TO_DECK, doAddCardToDeck),
      takeLatest(types.REMOVE_CARD_FROM_DECK, doRemoveCardFromDeck)
  ];
}
