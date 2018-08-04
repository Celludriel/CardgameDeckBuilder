import React, {Component} from 'react';

import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeckPickerSelect from './DeckPickerSelect'

class DeckPicker extends Component {

    saveDeck = () => {
        const { saveDeckAction } = this.props;
        saveDeckAction();
    }

    render(){
        const { decknames, selectDeck } = this.props;
        return (
            <div>
                <DeckPickerSelect decknames={decknames} selectDeck={selectDeck} />
                <Button variant="contained" size="small" >
                  <SaveIcon />
                  Delete
                </Button>
                <Button variant="contained" size="small" onClick={this.saveDeck} >
                  <SaveIcon />
                  Save
                </Button>
            </div>
        )
    }
}

export default DeckPicker;
