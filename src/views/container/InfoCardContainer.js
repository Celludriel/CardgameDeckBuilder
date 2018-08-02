import React, {Component} from 'react';
import { connect } from 'react-redux';

import InfoCardComponent from '../components/infocard/InfoCardComponent';
import { getSelectedCard } from '../../state/pokemon/selectors';

class InfoCardContainer extends Component {

    render(){
        const { selectedCard } = this.props;
        return (
            <InfoCardComponent card={selectedCard} />
        )
    }
}

const mapStateToProps = state => {
  return {
      selectedCard: getSelectedCard(state)
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
