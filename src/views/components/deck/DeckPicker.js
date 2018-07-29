import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

const decks = [
  {
    value: 'deck_1.json',
    label: 'deck 1',
  },
  {
    value: 'deck_2.json',
    label: 'deck 2',
  },
  {
    value: 'deck_3.json',
    label: 'deck 3',
  },
];

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
                <TextField
                  select
                  label="Deck"
                  value={this.state.deck}
                  onChange={this.handleChange('deck')}
                >
                  {decks.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Button variant="contained" size="small" >
                  <SaveIcon />
                  Save
                </Button>
            </div>
        )
    }
}

export default DeckPicker;
