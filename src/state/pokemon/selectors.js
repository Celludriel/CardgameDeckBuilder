
async function querylibrary(state){
    if(state.db != null){
        return await state.db.cards.find()
            .where('name')
            .eq('Deoxys ex')
            .exec();
    }
    return [];
}

export {
    querylibrary
}
