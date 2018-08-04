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
        const { decknames } = this.props;
        return (
            <div>
                <DeckPickerSelect decknames={decknames} />
                <Button variant="secondary" size="small" onClick={this.saveDeck} >
                  <SaveIcon />
                  Delete
                </Button>
                <Button variant="primary" size="small" >
                  <SaveIcon />
                  Save
                </Button>
            </div>
        )
    }
}

export default DeckPicker;
