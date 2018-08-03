import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';

class Attacks extends Component {

    render(){
        const { attacks } = this.props;
        console.log(attacks);
        return (
            attacks !== undefined && attacks.map(attack => {
                return <div key={attack.name}>
                    <Typography variant="body1" gutterBottom align="right">
                        {attack.cost}- {attack.name} - {attack.damage}
                    </Typography>
                    <Typography variant="body1" gutterBottom align="right">
                        {attack.text}
                    </Typography>
                </div>
            })
        )
    }
}

export default Attacks;
