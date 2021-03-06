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

export function getCurrentDeck(state) {
    return state.pokemon.currentDeck;
}

export function getFilteredDeck(state) {
    var filteredData = {};
    Object.entries(state.pokemon.currentDeck.cards).forEach(entry => {
        if(state.pokemon.deckFilter.includes(entry[1].supertype)){
            filteredData[entry[0]] = entry[1];
        }
    })
    return filteredData;
}
export function getDeckFilter(state) {
    return state.pokemon.deckFilter;
}
