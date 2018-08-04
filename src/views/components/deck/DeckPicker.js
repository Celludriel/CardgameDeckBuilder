import React, {Component} from 'react';

import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeckPickerSelect from './DeckPickerSelect'

class DeckPicker extends Component {

    render(){
        const { decknames } = this.props;
        return (
            <div>
                <DeckPickerSelect decknames={decknames} />
                <Button variant="contained" size="small" >
                  <SaveIcon />
                  Save
                </Button>
            </div>
        )
    }
}

export default DeckPicker;
