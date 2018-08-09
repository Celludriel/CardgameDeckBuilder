import React, {Component} from 'react';
import { VictoryTooltip, VictoryLabel } from 'victory';

class CustomPieLabel extends Component {
    static defaultEvents = VictoryTooltip.defaultEvents;

    render() {
        console.log(this.props);
      	return (
            <g>
                <VictoryLabel {...this.props}/>
                <VictoryTooltip
                  {...this.props}
                  x={0} y={25}
                  text={`${this.props.slice.data.y}`}
                  orientation="right"
                  pointerLength={0}
                  cornerRadius={50}
                  width={50}
                  height={50}
                  flyoutStyle={{ fill: "black" }}
                />
            </g>
        );
  }
}

export default CustomPieLabel;
