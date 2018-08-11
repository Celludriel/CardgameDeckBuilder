import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';

class Resistances extends Component {

    render(){
        const { resistances } = this.props;
        return (
            resistances !== undefined && resistances.map((resistance,index) => {
                return <div key={index}>
                    <Typography>
                        {resistance.type} - {resistance.value}
                    </Typography>
                </div>
            })
        )
    }
}

export default Resistances;
