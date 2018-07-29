import React, {Component} from 'react';

import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeckPickerSelect from './DeckPickerSelect'

class DeckPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deck: ''
        }
    }

    handleChange = prop => event => {
      this.setState({ [prop]: event.target.value });
    };

    render(){
        return (
            <div>
                <DeckPickerSelect />
                <Button variant="contained" size="small" >
                  <SaveIcon />
                  Save
                </Button>
            </div>
        )
    }
}

export default DeckPicker;
