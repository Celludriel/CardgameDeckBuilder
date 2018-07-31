import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper'

import LinearProgress from '@material-ui/core/LinearProgress';

class AppLoading extends Component {

    render(){
        return (
            <Paper>
                <div>
                  <LinearProgress />
                  <div>Loading Application...</div>
                  <LinearProgress color="secondary" />
                </div>
            </Paper>
        )
    }
}

export default AppLoading;
