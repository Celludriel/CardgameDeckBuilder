import types from "./types";

const INITIAL_STATE = {
    db: null,
    sets: [],
    isLoading: true,
    libraryRows: [],
    runningQuery: false,
    selectedCard: {},
    cardImageLocation: "",
    selectedDeck: {name: "", cards: []},
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
        case types.SELECT_CARD: {
            let card = state.libraryRows.filter(row => row.id === action.payload.cardId)[0];
            return Object.assign({}, state, {
                        selectedCard: card
                    });
        }
        case types.SET_CARD_IMAGE: {
            return Object.assign({}, state, {
                        cardImageLocation: action.payload.imageLocation
                    });
        }
        case types.END_LOAD_DECKS: {
            return Object.assign({}, state, {
                        decknames: action.payload
                    });
        }
        default: return state;
    }
}

export default pokemonReducer;
