import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';

class Ability extends Component {

    render(){
        const { ability } = this.props;
        return (
            ability !== undefined && <div>
                <Typography>
                    {ability.type}
                </Typography>
                <Typography>
                    {ability.name}
                </Typography>
                <Typography>
                    {ability.text}
                </Typography>
            </div>
        )
    }
}

export default Ability;
