import React, {Component} from 'react';
import { VictoryPie, VictoryTheme } from 'victory';

import Card from '@material-ui/core/Card';
import CustomPieLabel from './CustomPieLabel';

class NeededEnergyChart extends Component {

    getNeededEnergy = (data) => {
        var fullCosts = [];
        let entries = Object.entries(data);
        entries.forEach(entry => {
            let attacks = entry[1].attacks;
            if(attacks.length > 0){
                let costs = [];
                attacks.forEach(attack => {
                    costs.push(attack.cost)
                });

                let costReduce = costs.reduce((accumulator, currentArray) => {
                    var indices = Object.create(null);
                    currentArray.forEach(currentArrayElement => {
                        var indexOfCurrentElementInAccumulator = accumulator.indexOf(currentArrayElement, indices[currentArrayElement] || 0);
                        indices[currentArrayElement] = indexOfCurrentElementInAccumulator === -1 ? accumulator.push(currentArrayElement) : indexOfCurrentElementInAccumulator + 1;
                    });
                    return accumulator;
                });

                for(var i=0;i < entry[1].amount;i++){
                    fullCosts = fullCosts.concat(costReduce);
                }
            }
        })

        var result = fullCosts.reduce((countMap, word) => {
                            countMap[word] = ++countMap[word] || 1;
                            return countMap
                        }, {});

        return Object.entries(result).map(entry => {
            return {"x": entry[0], "y": entry[1]}
        })
    }

    render(){
        const { data } = this.props;
        const chartData = this.getNeededEnergy(data);
        return (
            <Card>
                <VictoryPie
                    labels={(d) => d.x}
                    labelComponent={<CustomPieLabel />}
                    labelRadius={90}
                    data={chartData}
                    theme={VictoryTheme.material}
                    padding={0}
                    style={{ labels: { fill: "white", fontSize: 14, fontWeight: "bold" } }}
                />
            </Card>
        )
    }
}

export default NeededEnergyChart;
