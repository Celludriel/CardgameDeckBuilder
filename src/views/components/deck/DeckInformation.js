import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import CardDistributionChart from './CardDistributionChart';
import NeededEnergyChart from './NeededEnergyChart';

class DeckInformation extends Component {

    render(){
        const { data } = this.props;
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        {Object.entries(data).length > 0 && <CardDistributionChart data={data} />}
                    </Grid>
                    <Grid item xs={4}>
                        {Object.entries(data).length > 0 && <NeededEnergyChart data={data} />}
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default DeckInformation;
