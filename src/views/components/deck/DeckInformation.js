import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardDistributionChart from './CardDistributionChart';


class DeckInformation extends Component {

    render(){
        const { data } = this.props;
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={5}>
                        <CardDistributionChart data={data} />
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
