import { put, takeEvery, cps, select, call } from 'redux-saga/effects'
import types from "./types"
import { loadDatabaseOperation, executeQuery, getCardImageLocation } from "./operations"
import { getSelectedCard } from '../../state/pokemon/selectors';

export function* loadDatabase() {
    try {
        const payload = yield cps(loadDatabaseOperation)
        yield put({ type: types.END_LOAD_DATABASE, payload })
    } catch (err) {
        console.log(err);
    }
}

export function* doQuery(action) {
    try {
        const { query, db } = action.payload;
        const payload = yield cps(executeQuery, query, db)
        yield put({ type: types.END_QUERY, payload })
    } catch (err) {
        console.log(err);
    }
}

export function* selectOrSaveImage() {
    try {
        let card = yield select(getSelectedCard);
        const payload = yield call(getCardImageLocation, card);
        console.log(payload);
        yield put({ type: types.SET_CARD_IMAGE, payload })
    } catch (err) {
        console.log(err);
    }
}

export function* pokemonSaga() {
  yield [
      takeEvery(types.START_LOAD_DATABASE, loadDatabase),
      takeEvery(types.START_QUERY, doQuery),
      takeEvery(types.SELECT_CARD, selectOrSaveImage),
  ];
}
