import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardDistributionChart from './CardDistributionChart';
import NeededEnergyChart from './NeededEnergyChart';


class DeckInformation extends Component {

    render(){
        const { data } = this.props;
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <CardDistributionChart data={data} />
                    </Grid>
                    <Grid item xs={4}>
                        <NeededEnergyChart data={data} />
                    </Grid>
                    <Grid item xs={4}>
                        <Card>== deck information here ==</Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default DeckInformation;
