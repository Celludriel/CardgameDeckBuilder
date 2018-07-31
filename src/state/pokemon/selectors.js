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
