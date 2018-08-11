import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import CardDistributionChart from './CardDistributionChart';
import NeededEnergyChart from './NeededEnergyChart';
import PokemonIcon from '../common/PokemonIcon';

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
                        <PokemonIcon size={0.16} type="Grass" />
                        <PokemonIcon size={0.15} type="Darkness" />
                        <PokemonIcon size={0.15} type="Colorless" />
                        <PokemonIcon size={0.15} type="Fighting" />
                        <PokemonIcon size={0.15} type="Fire" />
                        <PokemonIcon size={0.15} type="Electric" />
                        <PokemonIcon size={0.15} type="Water" />
                        <PokemonIcon size={0.15} type="Psychic" />
                        <PokemonIcon size={0.15} type="Metal" />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default DeckInformation;
