import React, {Component} from 'react';

import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import DeckPickerSelect from './DeckPickerSelect'

class DeckPicker extends Component {

    saveDeck = () => {
        const { saveDeckAction } = this.props;
        saveDeckAction();
    }

    deleteDeck = () => {
        const { deleteDeckAction } = this.props;
        deleteDeckAction();
    }

    render(){
        const { decknames, selectDeck } = this.props;
        return (
            <div>
                <DeckPickerSelect decknames={decknames} selectDeck={selectDeck} />
                <Button variant="contained" size="small" onClick={this.deleteDeck} >
                  <DeleteIcon />
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
