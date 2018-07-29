import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper'

import DeckPicker from './DeckPicker'
import DeckContents from './DeckContents'
import DeckInformation from './DeckInformation'

class DeckComponent extends Component {

    render(){
        return (
            <Paper>
                <DeckPicker />
                <DeckContents />
                <DeckInformation />
            </Paper>
        )
    }
}

export default DeckComponent;
