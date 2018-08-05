import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

class DeckInformation extends Component {

    render(){
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={5}>
                        <Card>== pie chart here ==</Card>
                    </Grid>
                    <Grid item xs={7}>
                        <Card>== deck information here ==</Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default DeckInformation;
