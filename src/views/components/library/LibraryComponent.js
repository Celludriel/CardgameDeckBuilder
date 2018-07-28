import React, {Component} from 'react';
import { Formik } from 'formik';

import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import LibraryFilter from './LibraryFilter';
import EnhancedTable from './LibraryEnhancedTable';

class LibraryComponent extends Component {

    render(){
        return (
            <div>
                <Card>
                    <Formik
                        initialValues={{
                          cardname: '',
                          set: '',
                          supertype_pokemon: true,
                          supertype_trainer: true,
                          supertype_energy: true,
                          type_colorless: true,
                          type_darkness: true,
                          type_dragon: true,
                          type_fairy: true,
                          type_fighting: true,
                          type_fire: true,
                          type_grass: true,
                          type_lightning: true,
                          type_metal: true,
                          type_psychic: true,
                          type_water: true
                        }}
                        validate={(
                            values
                        ) => {}}
                        onSubmit={(
                          values,
                          { setSubmitting, setErrors }
                        ) => {
                            console.log(values);
                        }}
                        component={LibraryFilter} />
                </Card>
                <Divider />
                <Card>
                    <EnhancedTable />
                </Card>
            </div>
        )
    }
}

export default LibraryComponent;
