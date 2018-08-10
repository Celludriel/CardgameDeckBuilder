import React, {Component} from 'react';

import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import DeckPickerSelect from './DeckPickerSelect'
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';

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
                <FormGroup row>
                    <FormControl style={{flexGrow: '30', paddingRight: '10px'}}>
                        <DeckPickerSelect decknames={decknames} selectDeck={selectDeck} />
                    </FormControl>
                    <FormControl style={{flexGrow: '1', paddingRight: '10px'}}>
                        <Button variant="contained" size="small" onClick={this.deleteDeck} >
                            <DeleteIcon />
                            Delete
                        </Button>
                    </FormControl>
                    <FormControl style={{flexGrow: '1', paddingRight: '10px'}}>
                        <Button variant="contained" size="small" onClick={this.saveDeck} >
                          <SaveIcon />
                          Save
                        </Button>
                    </FormControl>
                </FormGroup>
            </div>
        )
    }
}

export default DeckPicker;
