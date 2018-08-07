import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import InfoCard from './InfoCard';

class InfoCardComponent extends Component {

    render(){
        const { card, imageLocation } = this.props;
        return (
            <div>
                <Card>
                    <img alt='card' src={'atom:///' + imageLocation} />
                    <InfoCard card={card} />
                </Card>
            </div>
        )
    }
}

export default InfoCardComponent;
