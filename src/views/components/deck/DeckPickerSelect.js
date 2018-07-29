import React, {Component} from 'react';

import Input from '@material-ui/core/Input';
import CreatableSelect from 'react-select/lib/Creatable';

const suggestions = [
  { label: 'Deck 1' },
  { label: 'Deck 2' },
  { label: 'Deck 3' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

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
    return (
      <div>
        <Input
            id="deck-selection"
            fullWidth
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
      </div>
    );
  }
}

export default DeckPickerSelect
