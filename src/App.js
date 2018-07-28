import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import LibraryContainer from './views/container/LibraryContainer';
import InfoCardContainer from './views/container/InfoCardContainer';
import DeckContainer from './views/container/DeckContainer';

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
