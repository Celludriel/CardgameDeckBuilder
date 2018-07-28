import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';

import InfoCardComponent from '../components/infocard/InfoCardComponent';

class InfoCardContainer extends Component {

    render(){
        return (
            <div>
                <Paper>
                    <InfoCardComponent />
                </Paper>
            </div>
        )
    }
}

export default InfoCardContainer;
