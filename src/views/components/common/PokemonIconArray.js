import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import PokemonIcon from '../common/PokemonIcon';

class PokemonIconArray extends Component {

    render(){
        const { data } = this.props;

        return (
            <Grid container spacing={0}>
                {data.map((icontype, index) => {
                    return <Grid key={index} item>
                        <PokemonIcon size={0.2} type={icontype} />
                    </Grid>
                })}
            </Grid>
        )
    }
}

export default PokemonIconArray;
