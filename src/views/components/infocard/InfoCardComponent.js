import React, {Component} from 'react';

import Card from '@material-ui/core/Card';

//Electron setup
const electron = window.require('electron');
const app = electron.remote.app;

class InfoCardComponent extends Component {

    render(){
        const { card } = this.props;
        console.log(card);
        return (
            <div>
                <Card>
                    <img alt='card' src={app.getAppPath()  + '/data/test.png'} />
                </Card>
                <Card>
                    == Cardinformation will come here ==
                </Card>
            </div>
        )
    }
}

export default InfoCardComponent;
