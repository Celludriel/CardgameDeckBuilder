import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PokemonIcon from '../common/PokemonIcon';

class Weaknesses extends Component {

    render(){
        const { weaknesses } = this.props;
        return (
            weaknesses !== undefined &&
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Typography>Weak</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Grid container spacing={0} direction={'row'}>
                        {weaknesses.map((weakness,index) => {
                            return <Grid key={index} item style={{padding: '5px'}}><Grid container spacing={0} direction={'row'}>
                                <Grid item>
                                    <PokemonIcon size={0.2} type={weakness.type} />
                                </Grid>
                                <Grid item>
                                    <Typography>{weakness.value}</Typography>
                                </Grid>
                            </Grid></Grid>
                        })}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Weaknesses;
