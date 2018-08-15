import React, {Component} from 'react';
import { Formik } from 'formik';

import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import LibraryFilter from './LibraryFilter';
import LibraryEnhancedTable from './LibraryEnhancedTable';
import QueryRunning from '../common/QueryRunning';

import buildQuery from '../../../db/querybuilder';

class LibraryComponent extends Component {

    render(){
        const { rows, executeQuery, isQueryRunning, sets, selectCard,
            addCardToDeck, showAdd } = this.props;

        const filterStyle = !isQueryRunning ? {paddingLeft: '10px', paddingRight: '10px'}
        : {paddingLeft: '10px', paddingRight: '10px', pointerEvents: 'none', opacity: 0.4}
        return (
            <div>
                <Card style={filterStyle}>
                    <Formik
                        initialValues={{
                          cardname: '',
                          set: '',
                          supertypes: ["Pokémon","Trainer","Energy"],
                          types: ["Colorless", "Darkness", "Dragon", "Fairy", "Fighting", "Fire", "Grass", "Lightning", "Metal", "Psychic", "Water"],
                          sets: sets
                        }}
                        validate={(
                            values
                        ) => {}}
                        onSubmit={(
                          values,
                          { setSubmitting, setErrors }
                        ) => {
                            executeQuery(buildQuery(values));
                        }}
                        component={LibraryFilter}
                    />
                <Divider />
                {!isQueryRunning && <LibraryEnhancedTable rows={rows}
                    selectCard={selectCard}
                    addCardToDeck={addCardToDeck}
                    showAdd={showAdd} />}
                {isQueryRunning && <QueryRunning />}
                </Card>
            </div>
        )
    }
}

export default LibraryComponent;
