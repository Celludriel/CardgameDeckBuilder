import { call } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import types from "./types"
import { loadDatabaseOperation } from "./operations"

export function* loadDatabase() {
  const db = yield call(loadDatabaseOperation)
  yield put({ type: types.END_LOAD_DATABASE, db })
}

export function* pokemonSaga() {
  yield takeEvery(types.START_LOAD_DATABASE, loadDatabase)
}
