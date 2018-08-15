import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Ability extends Component {

    render(){
        const { ability } = this.props;
        return (
            ability !== undefined &&
            <Grid container spacing={0}>
                <Grid container spacing={0} direction={'row'}>
                    <Grid item xs={4}>
                        <Typography>
                            {ability.type}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography align='right'>
                            {ability.name}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0} direction={'row'}>
                    <Grid item xs={12}>
                        <Typography variant="caption">
                            {ability.text}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Ability;
