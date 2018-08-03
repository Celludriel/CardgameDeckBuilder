export function isLoading(state) {
    return state.pokemon.isLoading;
}

export function getLibraryRows(state) {
    return state.pokemon.libraryRows;
}

export function getDb(state) {
    return state.pokemon.db;
}

export function isQueryRunning(state) {
    return state.pokemon.runningQuery;
}

export function getSets(state) {
    return state.pokemon.sets;
}

export function getSelectedCard(state) {
    return state.pokemon.selectedCard;
}

export function getCardImageLocation(state) {
    return state.pokemon.cardImageLocation;
}

export function getDecknames(state) {
    return state.pokemon.decknames;
}
