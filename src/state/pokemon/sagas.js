import { put, takeEvery, cps } from 'redux-saga/effects'
import types from "./types"
import { loadDatabaseOperation, executeQuery } from "./operations"

//const { result, components } = yield cps(cb => new Fingerprint2().get((result, components) => cb(null, { result, components })))

export function* loadDatabase() {
    try {
        const db = yield cps(loadDatabaseOperation)
        yield put({ type: types.END_LOAD_DATABASE, db })
    } catch (err) {
        console.log(err);
    }
}

export function* doQuery(action) {
    try {
        const { query, db } = action.payload;
        const result = yield cps(executeQuery, query, db)
        yield put({ type: types.END_QUERY, result })
    } catch (err) {
        console.log(err);
    }
}

export function* pokemonSaga() {
  yield [
      takeEvery(types.START_LOAD_DATABASE, loadDatabase),
      takeEvery(types.START_QUERY, doQuery)
  ];
}
