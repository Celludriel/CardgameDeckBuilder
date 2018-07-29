
async function querylibrary(state, filter){
    if(this.state.db != null){
        return await this.state.db.cards.find()
            .where('name')
            .eq('Deoxys ex')
            .exec();
    }
    return [];
}

export {
    querylibrary
}
