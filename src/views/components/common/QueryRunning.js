import React, {Component} from 'react';

import Card from '@material-ui/core/Card'

import CircularProgress from '@material-ui/core/CircularProgress';

class QueryRunning extends Component {

    render(){
        return (
            <Card>
                <div>
                  <div>Querying...</div>
                  <CircularProgress size={50} />
                </div>
            </Card>
        )
    }
}

export default QueryRunning;
