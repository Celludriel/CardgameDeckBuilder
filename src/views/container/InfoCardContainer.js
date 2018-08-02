import React, {Component} from 'react';
import { connect } from 'react-redux';

import InfoCardComponent from '../components/infocard/InfoCardComponent';
import { getSelectedCard, getCardImageLocation } from '../../state/pokemon/selectors';

class InfoCardContainer extends Component {

    render(){
        const { selectedCard, imageLocation } = this.props;
        return (
            <InfoCardComponent card={selectedCard} imageLocation={imageLocation} />
        )
    }
}

const mapStateToProps = state => {
  return {
      selectedCard: getSelectedCard(state),
      imageLocation: getCardImageLocation(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (InfoCardContainer);
