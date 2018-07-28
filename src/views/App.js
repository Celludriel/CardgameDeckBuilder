import React, {Component} from 'react';
import './App.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import LibraryContainer from './container/LibraryContainer';
import InfoCardContainer from './container/InfoCardContainer';
import DeckContainer from './container/DeckContainer';

class App extends Component {
    render() {
        return (<div className="App">
            <Paper>
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <LibraryContainer />
                    </Grid>
                    <Grid item xs={2}>
                        <InfoCardContainer />
                    </Grid>
                    <Grid item xs={6}>
                        <DeckContainer />
                    </Grid>
                </Grid>
            </Paper>
        </div>);
    }
}

export default App;
