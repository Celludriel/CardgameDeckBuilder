import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Ability from './Ability';
import Attacks from './Attacks';
import Weaknesses from './Weaknesses';
import Resistances from './Resistances';
import PokemonIconArray from '../common/PokemonIconArray';

class InfoCard extends Component {

    render(){
        const { card } = this.props;
        return (
            <Card style={{padding: '5px'}}>
                <Grid container spacing={0}>
                    <Grid container spacing={0} direction={'row'}>
                        <Grid item xs={3}>
                            <Typography>Set:</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body1">{card.setCode}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography align='right'>No:</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography align='right' variant="body1">{card.number}</Typography>
                        </Grid>
                    </Grid>
                    {card.hp !== undefined && <Grid container spacing={0} direction={'row'}>
                        <Grid item xs={6}>
                            <Typography>{card.name}</Typography>
                        </Grid>
                        <Grid item xs={3} align='right'>
                            <Typography>HP:</Typography>
                        </Grid>
                        <Grid item xs={3} align='right'>
                            <Typography>{card.hp}</Typography>
                        </Grid>
                    </Grid>}
                    {card.hp === undefined && <Grid container spacing={0} direction={'row'}>
                        <Grid item xs={12}>
                            <Typography>{card.name}</Typography>
                        </Grid>
                    </Grid>}
                    <Grid container spacing={0} direction={'row'}>
                        <Grid item xs={3}>
                            <Typography>Type:</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body1">{card.supertype}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography align='right' variant="body1">{card.subtype}</Typography>
                        </Grid>
                    </Grid>
                    {card.types !== undefined && <Grid container spacing={0} direction={'row'}>
                        <Grid item xs={3}>
                            <Typography>Types:</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body1">{card.types}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography align='right' variant="body1">{card.rarity}</Typography>
                        </Grid>
                    </Grid>}
                    {card.types === undefined && <Grid container spacing={0} direction={'row'}>
                        <Grid item xs={12}>
                            <Typography variant="body1">{card.rarity}</Typography>
                        </Grid>
                    </Grid>}
                    <Grid container spacing={0} direction={'row'}>
                        <Grid item xs={12} variant="caption">
                            <Typography variant="caption">{card.text}</Typography>
                        </Grid>
                    </Grid>
                    <Ability ability={card.ability} />
                    <Attacks attacks={card.attacks} />
                    <Weaknesses weaknesses={card.weaknesses} />
                    <Resistances resistances={card.resistances} />
                    {card.retreatCost !== undefined && <Grid container spacing={0} direction={'row'}>
                        <Grid item xs={3}>
                            <Typography>Retreat:</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <PokemonIconArray data={card.retreatCost} />
                        </Grid>
                    </Grid>}
                </Grid>
            </Card>
        )
    }
}

export default InfoCard;
