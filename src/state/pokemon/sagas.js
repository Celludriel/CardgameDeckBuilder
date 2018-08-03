import { put, takeLatest, cps, select, call } from 'redux-saga/effects'
import types from "./types"
import { loadDatabaseOperation, executeQuery, getCardImageLocation } from "./operations"
import { getSelectedCard } from '../../state/pokemon/selectors';

export function* loadDatabase() {
    try {
        const endLoadDb = yield cps(loadDatabaseOperation);
        const payload = yield cps(executeQuery, {}, endLoadDb.db);
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

export function* selectOrSaveImage() {
    try {
        let card = yield select(getSelectedCard);
        const payload = yield call(getCardImageLocation, card);
        console.log(payload);
        yield put({ type: types.SET_CARD_IMAGE, payload });
    } catch (err) {
        console.log(err);
    }
}

export function* pokemonSaga() {
  yield [
      takeLatest(types.START_LOAD_DATABASE, loadDatabase),
      takeLatest(types.START_QUERY, doQuery),
      takeLatest(types.SELECT_CARD, selectOrSaveImage),
  ];
}
