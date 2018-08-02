import types from "./types";

const INITIAL_STATE = {
    db: null,
    sets: [],
    isLoading: true,
    libraryRows: [],
    runningQuery: false,
    selectedCard: {}
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
        case types.SELECT_CARD: {
            let card = state.libraryRows.filter(row => row.id === action.payload.cardId)[0];
            return Object.assign({}, state, {
                        selectedCard: card
                    });
        }
        default: return state;
    }
}

export default pokemonReducer;
