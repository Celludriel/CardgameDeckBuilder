import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper'

import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

class AppLoading extends Component {

    render(){
        return (
            <Paper>
                <div>
                  <LinearProgress />
                  <div><Typography>Loading Application...</Typography></div>
                  <LinearProgress color="secondary" />
                </div>
            </Paper>
        )
    }
}

export default AppLoading;
