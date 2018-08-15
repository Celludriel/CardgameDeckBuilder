import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper'

import DeckPicker from './DeckPicker'
import DeckContents from './DeckContents'
import DeckInformation from './DeckInformation'

class DeckComponent extends Component {

    render(){
        const { decknames, saveDeckAction, deleteDeckAction, selectDeck,
            data, selectCard, removeCardFromDeck, updateDeckFilter,
            deckFilter, visibleData } = this.props
        return (
            <Paper style={{paddingLeft: '10px', paddingRight: '10px', height: '100%'}}>
                <DeckPicker decknames={decknames}
                    selectDeck={selectDeck}
                    saveDeckAction={saveDeckAction}
                    deleteDeckAction={deleteDeckAction}
                />
                <DeckContents data={visibleData}
                    selectCard={selectCard}
                    removeCardFromDeck={removeCardFromDeck}
                    updateDeckFilter={updateDeckFilter}
                    deckFilter={deckFilter} />
                <DeckInformation data={data} />
            </Paper>
        )
    }
}

export default DeckComponent;
