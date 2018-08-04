import types from "./types";

const INITIAL_STATE = {
    db: null,
    sets: [],
    isLoading: true,
    libraryRows: [],
    runningQuery: false,
    selectedCard: {},
    cardImageLocation: "",
    currentDeck: {name: "", cards: []},
    decknames: []
};

const pokemonReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case types.END_LOAD_DATABASE: {
            return Object.assign({}, state, {
                        db: action.endLoadDb.db,
                        sets: action.endLoadDb.sets,
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
                        libraryRows: action.payload,
                        runningQuery: false
                    });
        }
        case types.END_SELECT_CARD: {
            return Object.assign({}, state, {
                        selectedCard: action.payload.card,
                        cardImageLocation: action.payload.cardimage.imageLocation
                    });
        }
        case types.END_LOAD_DECKS: {
            return Object.assign({}, state, {
                        decknames: action.payload
                    });
        }
        case types.END_SELECT_DECK: {
            return Object.assign({}, state, {
                        currentDeck: action.payload
                    });
        }
        default: return state;
    }
}

export default pokemonReducer;
