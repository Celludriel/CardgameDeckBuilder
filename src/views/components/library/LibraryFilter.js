import React, {Component} from 'react';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

class LibraryFilter extends Component {

    handleCustomChange = (e) => {
        this.props.handleChange(e);
        this.props.submitForm();
    }

    render() {
        const {handleBlur, handleSubmit, values} = this.props

        return (<form onSubmit={handleSubmit}>
            <Input id="cardname" placeholder="Cardname" inputProps={{
                    'aria-label' : 'Cardname'
                }} value={values.cardname} onChange={this.handleCustomChange} onBlur={handleBlur} />
            <br />
            <FormGroup row>
                <FormControl>
                  <InputLabel htmlFor="set">Set</InputLabel>
                  <Select
                    value={values.set}
                    onChange={this.handleCustomChange}
                    inputProps={{
                      name: 'set',
                      id: 'set',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"ex8"}>ex8</MenuItem>
                  </Select>
                </FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      id='supertype_pokemon'
                      checked={values.supertype_pokemon}
                      onChange={this.handleCustomChange}
                      value="supertype_pokemon"
                    />
                  }
                  label="Pokemon"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      id='supertype_trainer'
                      checked={values.supertype_trainer}
                      onChange={this.handleCustomChange}
                      value="supertype_trainer"
                    />
                  }
                  label="Trainer"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      id='supertype_energy'
                      checked={values.supertype_energy}
                      onChange={this.handleCustomChange}
                      value="supertype_energy"
                    />
                  }
                  label="Energy"
                />
            </FormGroup>
            <Divider />
            <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      id='type_colorless'
                      checked={values.type_colorless}
                      onChange={this.handleCustomChange}
                      value="type_colorless"
                    />
                  }
                  label="Colorless"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      id='type_darkness'
                      checked={values.type_darkness}
                      onChange={this.handleCustomChange}
                      value="type_darkness"
                    />
                  }
                  label="Darkness"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      id='type_dragon'
                      checked={values.type_dragon}
                      onChange={this.handleCustomChange}
                      value="type_dragon"
                    />
                  }
                  label="Dragon"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      id='type_fairy'
                      checked={values.type_fairy}
                      onChange={this.handleCustomChange}
                      value="type_fairy"
                    />
                  }
                  label="Fairy"
                />
            </FormGroup>
            <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      id='type_fighting'
                      checked={values.type_fighting}
                      onChange={this.handleCustomChange}
                      value="type_fighting"
                    />
                  }
                  label="Fighting"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      id='type_fire'
                      checked={values.type_fire}
                      onChange={this.handleCustomChange}
                      value="type_fire"
                    />
                  }
                  label="Fire"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      id='type_grass'
                      checked={values.type_grass}
                      onChange={this.handleCustomChange}
                      value="type_grass"
                    />
                  }
                  label="Grass"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      id='type_lightning'
                      checked={values.type_lightning}
                      onChange={this.handleCustomChange}
                      value="type_lightning"
                    />
                  }
                  label="Lightning"
                />
            </FormGroup>
            <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      id='type_metal'
                      checked={values.type_metal}
                      onChange={this.handleCustomChange}
                      value="type_metal"
                    />
                  }
                  label="Metal"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      id='type_psychic'
                      checked={values.type_psychic}
                      onChange={this.handleCustomChange}
                      value="type_psychic"
                    />
                  }
                  label="Psychic"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      id='type_water'
                      checked={values.type_water}
                      onChange={this.handleCustomChange}
                      value="type_water"
                    />
                  }
                  label="Water"
                />
            </FormGroup>
        </form>)
    }
}

export default LibraryFilter;
