import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PokemonIcon from '../common/PokemonIcon';

class Resistances extends Component {

    render(){
        const { resistances } = this.props;
        return (
            resistances !== undefined &&
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Typography>Resist</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Grid container spacing={0} direction={'row'}>
                        {resistances.map((resist,index) => {
                            return <Grid key={index} item style={{padding: '5px'}}><Grid container spacing={0} direction={'row'}>
                                <Grid item>
                                    <PokemonIcon size={0.2} type={resist.type} />
                                </Grid>
                                <Grid item>
                                    <Typography>{resist.value}</Typography>
                                </Grid>
                            </Grid></Grid>
                        })}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Resistances;
