import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';

class CardDistributionChart extends Component {

    getCardDistribution = (data) => {
        let pokemonCards = 0;
        let trainerCards = 0;
        let energyCards = 0;

        let entries = Object.entries(data);
        entries.forEach(entry => {
            switch(entry[1].supertype){
                case "Pokémon": pokemonCards = pokemonCards + entry[1].amount;break;
                case "Trainer": trainerCards = trainerCards + entry[1].amount;break;
                case "Energy": energyCards = energyCards + entry[1].amount;break;
                default:  break;
            }
        })

        return [
            {"type": "Pokémon", "cards": pokemonCards, "label": pokemonCards},
            {"type": "Trainer", "cards": trainerCards, "label": trainerCards},
            {"type": "Energy", "cards": energyCards, "label": energyCards}
        ];
    }

    countAllCards = (cardDistribution) => {
        let cardCount = 0;
        cardDistribution.forEach(cardtype => {
            cardCount += cardtype.cards;
        })
        return cardCount;
    }

    render(){
        const { data } = this.props;
        const chartData = this.getCardDistribution(data);
        const fullCardCount = this.countAllCards(chartData);
        return (
            <div>
                <Typography variant="body1" gutterBottom align="right">
                  #cards: {fullCardCount}
                </Typography>
                <VictoryChart domainPadding={20}
                    theme={VictoryTheme.material}>
                    <VictoryAxis />
                    <VictoryAxis dependentAxis />
                    <VictoryBar
                      labelComponent={<VictoryTooltip/>}
                      data={chartData}
                      x="type"
                      y="cards"
                    />
                </VictoryChart>
            </div>
        )
    }
}

export default CardDistributionChart;
