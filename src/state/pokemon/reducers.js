import types from "./types";

const INITIAL_STATE = {
    db: null,
    sets: [],
    isLoading: true,
    libraryRows: [],
    runningQuery: false
};

const pokemonReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case types.END_LOAD_DATABASE: {
            return Object.assign({}, state, {
                        db: action.payload.db,
                        sets: action.payload.sets,
                        isLoading: false
                    });
        }
        case types.START_QUERY: {
            return Object.assign({}, state, {
                        runningQuery: true
                    });
        }
        case types.END_QUERY: {
            return Object.assign({}, state, {
                        libraryRows: action.result,
                        runningQuery: false
                    });
        }
        default: return state;
    }
}

export default pokemonReducer;
