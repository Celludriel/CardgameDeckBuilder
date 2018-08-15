import React, {Component} from 'react';

import Card from '@material-ui/core/Card'

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

class QueryRunning extends Component {

    render(){
        return (
            <Card>
                <div>
                  <div><Typography>Querying...</Typography></div>
                  <CircularProgress size={50} />
                </div>
            </Card>
        )
    }
}

export default QueryRunning;
