import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import InfoCard from './InfoCard';

class InfoCardComponent extends Component {

    render(){
        const { card, imageLocation } = this.props;
        console.log(card);
        return (
            <div>
                <Card>
                    <img alt='card' src={'atom:///' + imageLocation} />
                </Card>
                <Card>
                    <InfoCard card={card} />
                </Card>
            </div>
        )
    }
}

export default InfoCardComponent;
