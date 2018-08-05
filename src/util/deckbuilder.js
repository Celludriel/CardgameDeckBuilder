export function addCardToDeck(card, deck){
    if(cardExistInDeck(card.id, deck)){
        return increaseCardAmount(card.id, deck)
    } else {
        return addCardToDeckList(card, deck)
    }
}

export function removeCardFromDeck(card, deck){
    if(lastCardInDeck(card.id, deck)){
        return removeCardFromDeckList(card.id, deck)
    } else {
        return decreaseCardAmount(card.id, deck)
    }
}

function cardExistInDeck(cardId, deck){
    return Object.keys(deck).includes(cardId);
}

function increaseCardAmount(cardId, deck){
    return {
        ...deck,
        [cardId]: {
            ...deck[cardId], amount: deck[cardId].amount + 1
        }
    }
}

function formatCardForDeck(card){
    return {
        "setCode": card.setCode,
        "name": card.name,
        "supertype": card.supertype,
        "subtype": card.subtype,
        "types": card.types !== undefined ? card.types : [],
        "amount": 1
    }
}

function addCardToDeckList(card, deck){
    return {
        ...deck,
        [card.id]: formatCardForDeck(card)
    }
}

function lastCardInDeck(cardId, deck){
    return deck[cardId].amount === 1
}

function removeCardFromDeckList(cardId, deck){
    return Object.keys(deck)
        .filter(key => key !== cardId)
        .reduce((result, current) => {
            result[current] = deck[current];
            return result;
        }, {});
}

function decreaseCardAmount(cardId, deck){
    return {
        ...deck,
        [cardId]: {
            ...deck[cardId], amount: deck[cardId].amount - 1
        }
    }
}
