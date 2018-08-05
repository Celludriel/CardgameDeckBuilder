import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';

class Ability extends Component {

    render(){
        const { ability } = this.props;
        return (
            ability !== undefined && <div>
                <Typography variant="body1" gutterBottom align="right">
                    {ability.type}
                </Typography>
                <Typography variant="body1" gutterBottom align="right">
                    {ability.name}
                </Typography>
                <Typography variant="body1" gutterBottom align="right">
                    {ability.text}
                </Typography>
            </div>
        )
    }
}

export default Ability;
