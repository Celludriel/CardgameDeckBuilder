import React, {Component} from 'react';

import { FieldArray } from "formik";

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

class LibraryFilter extends Component {

    componentDidMount = () => {
       this.submitForm = debounce(this.submitForm, 1000);
    }

    handleCustomChange = (e) => {
        this.props.handleChange(e);
        this.submitForm();      
    }

    submitForm = () => {
        this.props.submitForm();
    }

    debounce = (func, wait, immediate) => {
    	var timeout;
    	return function() {
    		var context = this, args = arguments;
    		clearTimeout(timeout);
    		timeout = setTimeout(function() {
    			timeout = null;
    			if (!immediate) func.apply(context, args);
    		}, wait);
    		if (immediate && !timeout) func.apply(context, args);
    	};
    }

    fieldArrayChange = (e) => {
        this.submitForm();
    }

    typesChange = (e, arrayHelpers, values, type) => {
      if (e.target.checked) arrayHelpers.push(type);
      else {
        const idx = values.types.indexOf(type);
        arrayHelpers.remove(idx);
      }
      this.fieldArrayChange(e);
    }

    render() {
        const {handleBlur, handleSubmit, values} = this.props;
        const superTypes = [{type: "Pokémon"}, {type: "Trainer"}, {type: "Energy"}];
        return (<form onSubmit={handleSubmit}>
            <FormGroup row>
                <FormControl style={{flexGrow: '1', paddingRight: '10px'}}>
                    <InputLabel shrink  htmlFor="set">Set</InputLabel>
                    <Select
                        value={values.set}
                        onChange={this.handleCustomChange}
                        inputProps={{
                            name: 'set',
                            id: 'set',
                        }}
                        displayEmpty
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {values.sets.map(set => <MenuItem key={set} value={set}>{set}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl style={{flexGrow: '10'}}>
                    <InputLabel shrink htmlFor="cardname">Card</InputLabel>
                    <Input
                        inputProps={{
                            name: 'cardname',
                            id: 'cardname'
                        }}
                        value={values.cardname}
                        onChange={this.handleCustomChange}
                        onBlur={handleBlur}
                    />
                </FormControl>
            </FormGroup>
            <FieldArray
              name="supertypes"
              render={arrayHelpers => (
                <FormGroup row>
                  {superTypes.map(supertype => (
                    <FormControlLabel
                      key={supertype.type}
                      control={
                        <Checkbox
                          name="supertypes"
                          checked={values.supertypes.includes(supertype.type)}
                          value={supertype.type}
                          onChange={e => {
                            if (e.target.checked) arrayHelpers.push(supertype.type);
                            else {
                              const idx = values.supertypes.indexOf(supertype.type);
                              arrayHelpers.remove(idx);
                            }
                            this.fieldArrayChange(e);
                          }}
                        />
                      }
                      label={supertype.type}
                    />
                  ))}
                </FormGroup>
              )}
            />
            <Divider />
            <FieldArray
              name="types"
              render={arrayHelpers => (
                <div>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                name='types'
                                checked={values.types.includes("Colorless")}
                                value="Colorless"
                                onChange={e => {
                                        if (e.target.checked) arrayHelpers.push("Colorless");
                                        else {
                                            const idx = values.types.indexOf("Colorless");
                                            arrayHelpers.remove(idx);
                                        }
                                        this.fieldArrayChange(e);
                                    }}
                                />
                            }
                            label="Colorless"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                name='types'
                                checked={values.types.includes("Darkness")}
                                value="Darkness"
                                onChange={e => {
                                        if (e.target.checked) arrayHelpers.push("Darkness");
                                        else {
                                            const idx = values.types.indexOf("Darkness");
                                            arrayHelpers.remove(idx);
                                        }
                                        this.fieldArrayChange(e);
                                    }}
                                />
                            }
                            label="Darkness"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                name='types'
                                checked={values.types.includes("Dragon")}
                                value="Dragon"
                                onChange={e => {
                                        if (e.target.checked) arrayHelpers.push("Dragon");
                                        else {
                                            const idx = values.types.indexOf("Dragon");
                                            arrayHelpers.remove(idx);
                                        }
                                        this.fieldArrayChange(e);
                                    }}
                                />
                            }
                            label="Dragon"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                name='types'
                                checked={values.types.includes("Fairy")}
                                value="Fairy"
                                onChange={e => {
                                        if (e.target.checked) arrayHelpers.push("Fairy");
                                        else {
                                            const idx = values.types.indexOf("Fairy");
                                            arrayHelpers.remove(idx);
                                        }
                                        this.fieldArrayChange(e);
                                    }}
                                />
                            }
                            label="Fairy"
                        />
                    </FormGroup>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                name='types'
                                checked={values.types.includes("Fighting")}
                                value="Fighting"
                                onChange={e => {
                                        if (e.target.checked) arrayHelpers.push("Fighting");
                                        else {
                                            const idx = values.types.indexOf("Fighting");
                                            arrayHelpers.remove(idx);
                                        }
                                        this.fieldArrayChange(e);
                                    }}
                                />
                            }
                            label="Fighting"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                name='types'
                                checked={values.types.includes("Fire")}
                                value="Fire"
                                onChange={e => {
                                        if (e.target.checked) arrayHelpers.push("Fire");
                                        else {
                                            const idx = values.types.indexOf("Fire");
                                            arrayHelpers.remove(idx);
                                        }
                                        this.fieldArrayChange(e);
                                    }}
                                />
                            }
                            label="Fire"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                name='types'
                                checked={values.types.includes("Grass")}
                                value="Grass"
                                onChange={e => {
                                        if (e.target.checked) arrayHelpers.push("Grass");
                                        else {
                                            const idx = values.types.indexOf("Grass");
                                            arrayHelpers.remove(idx);
                                        }
                                        this.fieldArrayChange(e);
                                    }}
                                />
                            }
                            label="Grass"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                name='types'
                                checked={values.types.includes("Lightning")}
                                value="Lightning"
                                onChange={e => {
                                        if (e.target.checked) arrayHelpers.push("Lightning");
                                        else {
                                            const idx = values.types.indexOf("Lightning");
                                            arrayHelpers.remove(idx);
                                        }
                                        this.fieldArrayChange(e);
                                    }}
                                />
                            }
                            label="Lightning"
                        />
                    </FormGroup>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                name='types'
                                checked={values.types.includes("Metal")}
                                value="Metal"
                                onChange={e => {
                                        if (e.target.checked) arrayHelpers.push("Metal");
                                        else {
                                            const idx = values.types.indexOf("Metal");
                                            arrayHelpers.remove(idx);
                                        }
                                        this.fieldArrayChange(e);
                                    }}
                                />
                            }
                            label="Metal"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                name='types'
                                checked={values.types.includes("Psychic")}
                                value="Psychic"
                                onChange={e => {
                                        if (e.target.checked) arrayHelpers.push("Psychic");
                                        else {
                                            const idx = values.types.indexOf("Psychic");
                                            arrayHelpers.remove(idx);
                                        }
                                        this.fieldArrayChange(e);
                                    }}
                                />
                            }
                            label="Psychic"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                name='types'
                                checked={values.types.includes("Water")}
                                value="Water"
                                onChange={e => {
                                        if (e.target.checked) arrayHelpers.push("Water");
                                        else {
                                            const idx = values.types.indexOf("Water");
                                            arrayHelpers.remove(idx);
                                        }
                                        this.fieldArrayChange(e);
                                    }}
                                />
                            }
                            label="Water"
                        />
                    </FormGroup>
                  </div>
              )}
             />
        </form>)
    }
}

export default LibraryFilter;
