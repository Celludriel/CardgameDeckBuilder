import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import Ability from './Ability';
import Attacks from './Attacks';
import Weaknesses from './Weaknesses';
import Resistances from './Resistances';

class InfoCard extends Component {

    render(){
        const { card } = this.props;
        return (
            <div>
                <Typography>
                  Set: {card.setCode} No: {card.number}
                </Typography>
                <Typography>
                  Name: {card.name} HP: {card.hp}
                </Typography>
                <Typography>
                  Type: {card.supertype} Subtype: {card.subtype}
                </Typography>
                <Typography>
                  Types: {card.types} Rarity: {card.rarity}
                </Typography>
                <Typography>
                  {card.text}
                </Typography>
                <Ability ability={card.ability} />
                <Attacks attacks={card.attacks} />
                <Weaknesses weaknesses={card.weaknesses} />
                <Resistances resistances={card.resistances} />
                <Typography>
                  Retreat cost: {card.retreatCost}
                </Typography>
            </div>
        )
    }
}

export default InfoCard;
