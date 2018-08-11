import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';

class Attacks extends Component {

    render(){
        const { attacks } = this.props;
        return (
            attacks !== undefined && attacks.map(attack => {
                return <div key={attack.name}>
                    <Typography>
                        {attack.cost}- {attack.name} - {attack.damage}
                    </Typography>
                    <Typography>
                        {attack.text}
                    </Typography>
                </div>
            })
        )
    }
}

export default Attacks;
