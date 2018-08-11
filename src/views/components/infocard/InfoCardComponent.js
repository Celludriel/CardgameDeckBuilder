import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import InfoCard from './InfoCard';

class InfoCardComponent extends Component {

    render(){
        const { card, imageLocation } = this.props;
        return (
            <Grid container>
                <Grid item>
                    <img alt='card' src={'atom:///' + imageLocation} width="90%" height="90%" style={{marginLeft: '12px'}} />
                </Grid>
                <Grid item>
                    <InfoCard card={card} />
                </Grid>
            </Grid>
        )
    }
}

export default InfoCardComponent;
