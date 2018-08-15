import types from "./types";

const INITIAL_STATE = {
    db: null,
    sets: [],
    isLoading: true,
    libraryRows: [],
    runningQuery: false,
    selectedCard: null,
    cardImageLocation: "",
    currentDeck: {name: "", cards: []},
    decknames: [],
    deckFilter: ["Pokémon","Trainer","Energy"],
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
        case types.DECK_UPDATE: {
            return Object.assign({}, state, {
                currentDeck: Object.assign({}, state.currentDeck, {
                    cards: action.payload
                })
            });
        }
        case types.DECK_FILTER_UPDATE: {
            var e = action.payload.event;
            var newDeckFilter = [];
            if (e.target.checked){
                newDeckFilter = state.deckFilter.concat(e.target.value)
            } else {
                newDeckFilter = state.deckFilter.filter(item => item !== e.target.value)
            }

            return Object.assign({}, state, {
                deckFilter: newDeckFilter
            });
        }
        default: return state;
    }
}

export default pokemonReducer;
