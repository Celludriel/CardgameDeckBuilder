import types from "./types";

const INITIAL_STATE = {
    db: null
};

const pokemonReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case types.END_LOAD_DATABASE: {
            return Object.assign({}, state, {
                        db: action.payload.db
                    });
        }
        default: return state;
    }
}

export default pokemonReducer;
