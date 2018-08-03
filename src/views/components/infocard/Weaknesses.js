import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';

class Weaknesses extends Component {

    render(){
        const { weaknesses } = this.props;
        console.log(weaknesses);
        return (
            weaknesses !== undefined && weaknesses.map((weakness,index) => {
                return <div key={index}>
                    <Typography variant="body1" gutterBottom align="right">
                        {weakness.type} - {weakness.value}
                    </Typography>
                </div>
            })
        )
    }
}

export default Weaknesses;
