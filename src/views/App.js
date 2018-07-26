import React, {Component} from 'react';
import './App.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import LibraryContainer from './container/LibraryContainer';

class App extends Component {
    render() {
        return (<div className="App">
            <Grid container spacing={8}>
                <Grid item xs={4}>
                    <LibraryContainer />
                </Grid>
                <Grid item xs={4}>
                    <Paper>xs=4</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>xs=4</Paper>
                </Grid>
            </Grid>
        </div>);
    }
}

export default App;
