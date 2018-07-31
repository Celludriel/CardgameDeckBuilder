import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga'

import pokemonReducer from "./pokemon/reducers.js";
import { pokemonSaga } from "./pokemon/sagas.js";

export default function configureStore(initialState = {}) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        combineReducers({pokemon: pokemonReducer}),
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(pokemonSaga);

    return store;
}
