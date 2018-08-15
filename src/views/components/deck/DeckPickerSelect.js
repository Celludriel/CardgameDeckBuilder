import React, {Component} from 'react';

import Input from '@material-ui/core/Input';
import CreatableSelect from 'react-select/lib/Creatable';

function selectWrapped(props) {
  const { name, instanceId, simpleValue, options, changeHandler } = props;
  return (
    <CreatableSelect
        isClearable
        options={options}
        name={name}
        instanceId={instanceId}
        simpleValue={simpleValue}
        onChange={changeHandler}
    />
  );
}

class DeckPickerSelect extends Component {
  state = {
    single: null
  };

  handleChange = (newValue, actionMeta) => {
    const { selectDeck } = this.props;
    selectDeck(newValue);
  }

  render() {
    const { decknames } = this.props;
    let suggestions  = [];

    decknames.forEach(function(deckname) {
        suggestions.push({
                "value": deckname,
                "label": deckname
        });
    });

    return (
        <Input
            id="deck-selection"
            inputComponent={selectWrapped}
            inputProps={{
                name: 'deck-selection',
                instanceId: 'deck-selection',
                simpleValue: true,
                options: suggestions,
                changeHandler: this.handleChange
            }}
            value={this.state.single}
            placeholder="Load an existing deck"
            style={{display: 'inline'}}
        />
    );
  }
}

export default DeckPickerSelect
