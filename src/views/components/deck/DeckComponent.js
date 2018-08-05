import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper'

import DeckPicker from './DeckPicker'
import DeckContents from './DeckContents'
import DeckInformation from './DeckInformation'

class DeckComponent extends Component {

    render(){
        const { decknames, saveDeckAction, deleteDeckAction, selectDeck,
            data, selectCard, removeCardFromDeck } = this.props
        return (
            <Paper>
                <DeckPicker decknames={decknames}
                    selectDeck={selectDeck}
                    saveDeckAction={saveDeckAction}
                    deleteDeckAction={deleteDeckAction}
                />
                <DeckContents data={data}
                    selectCard={selectCard}
                    removeCardFromDeck={removeCardFromDeck} />
                <DeckInformation data={data} />
            </Paper>
        )
    }
}

export default DeckComponent;
