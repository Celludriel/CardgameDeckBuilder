import React, {Component} from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import DeckEnhancedTable from './DeckEnhancedTable';

class DeckContents extends Component {

    render(){
        const { data, selectCard, removeCardFromDeck, deckFilter,
            updateDeckFilter } = this.props;
        const supertypes = [{type: "Pokémon"}, {type: "Trainer"}, {type: "Energy"}];
        return (
            <div>
                <FormGroup row>
                  {supertypes.map(supertype => (
                    <FormControlLabel
                      key={supertype.type}
                      control={
                        <Checkbox
                          name="supertypes"
                          checked={deckFilter.includes(supertype.type)}
                          value={supertype.type}
                          onChange={e => {updateDeckFilter(e)}}
                        />
                      }
                      label={supertype.type}
                    />
                  ))}
                </FormGroup>
                <DeckEnhancedTable data={data}
                    selectCard={selectCard}
                    removeCardFromDeck={removeCardFromDeck} />
            </div>
        )
    }
}

export default DeckContents;
