import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper'

import DeckPicker from './DeckPicker'
import DeckContents from './DeckContents'
import DeckInformation from './DeckInformation'

class DeckComponent extends Component {

    render(){
        const { decknames } = this.props
        return (
            <Paper>
                <DeckPicker decknames={decknames} />
                <DeckContents />
                <DeckInformation />
            </Paper>
        )
    }
}

export default DeckComponent;
