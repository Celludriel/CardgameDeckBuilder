import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PokemonIconArray from '../common/PokemonIconArray';

class Attacks extends Component {

    render(){
        const { attacks } = this.props;
        return (
            attacks !== undefined &&
            <Grid container spacing={0}>
                {attacks.map(attack => {
                    return <Grid key={attack.name} container spacing={0}>
                        <Grid key={attack.name} container spacing={0} direction={'row'}>
                            <Grid item xs={5}>
                                <PokemonIconArray data={attack.cost} />
                            </Grid>
                            <Grid item xs={5}>
                                <Typography variant="body2">{attack.name}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="body2" align='right'>{attack.damage}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">{attack.text}</Typography>
                        </Grid>
                    </Grid>
                })}
            </Grid>
        )
    }
}

export default Attacks;
