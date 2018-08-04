import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper'

import DeckPicker from './DeckPicker'
import DeckContents from './DeckContents'
import DeckInformation from './DeckInformation'

class DeckComponent extends Component {

    render(){
        const { decknames, saveDeckAction, deleteDeckAction, selectDeck } = this.props
        return (
            <Paper>
                <DeckPicker decknames={decknames}
                    selectDeck={selectDeck}
                    saveDeckAction={saveDeckAction}
                    deleteDeckAction={deleteDeckAction}
                />
                <DeckContents />
                <DeckInformation />
            </Paper>
        )
    }
}

export default DeckComponent;
