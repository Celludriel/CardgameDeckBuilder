import React, {Component} from 'react';

import Input from '@material-ui/core/Input';
import CreatableSelect from 'react-select/lib/Creatable';

function selectWrapped(props) {
  const { name, instanceId, simpleValue, options } = props;
  return (
    <CreatableSelect
        isClearable
        options={options}
        name={name}
        instanceId={instanceId}
        simpleValue={simpleValue}
    />
  );
}

class DeckPickerSelect extends Component {
  state = {
    single: null
  };

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

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
                options: suggestions
            }}
            value={this.state.single}
            onChange={this.handleChange('single')}
            placeholder="Load an existing deck"
        />
    );
  }
}

export default DeckPickerSelect
