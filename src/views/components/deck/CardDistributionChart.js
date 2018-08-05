import React, {Component} from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';

import Card from '@material-ui/core/Card';

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

    render(){
        const { data } = this.props;
        const chartData = this.getCardDistribution(data);
        return (
            <Card>
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
            </Card>
        )
    }
}

export default CardDistributionChart;
