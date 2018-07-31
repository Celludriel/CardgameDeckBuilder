import React, {Component} from 'react';
import { Formik } from 'formik';

import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import LibraryFilter from './LibraryFilter';
import EnhancedTable from './LibraryEnhancedTable';
import QueryRunning from '../common/QueryRunning';

import buildQuery from '../../../db/querybuilder';

class LibraryComponent extends Component {

    render(){
        const { rows, executeQuery, isQueryRunning } = this.props;
        return (
            <div>
                <Card>
                    <Formik
                        initialValues={{
                          cardname: '',
                          set: '',
                          supertypes: ["Pokémon","Trainer","Energy"],
                          types: ["Colorless", "Darkness", "Dragon", "Fairy", "Fighting", "Fire", "Grass", "Lightning", "Metal", "Psychic", "Water"]
                        }}
                        validate={(
                            values
                        ) => {}}
                        onSubmit={(
                          values,
                          { setSubmitting, setErrors }
                        ) => {
                            console.log(values);
                            executeQuery(buildQuery(values));
                        }}
                        component={LibraryFilter} />
                </Card>
                <Divider />
                {!isQueryRunning && <EnhancedTable rows={rows} />}
                {isQueryRunning && <QueryRunning />}
            </div>
        )
    }
}

export default LibraryComponent;
