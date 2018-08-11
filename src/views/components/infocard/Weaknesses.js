import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';

class Weaknesses extends Component {

    render(){
        const { weaknesses } = this.props;
        return (
            weaknesses !== undefined && weaknesses.map((weakness,index) => {
                return <div key={index}>
                    <Typography>
                        {weakness.type} - {weakness.value}
                    </Typography>
                </div>
            })
        )
    }
}

export default Weaknesses;
