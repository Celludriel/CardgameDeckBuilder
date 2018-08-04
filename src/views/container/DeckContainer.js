import React, {Component} from 'react';
import { connect } from 'react-redux';

import DeckComponent from '../components/deck/DeckComponent'
import { getDecknames } from '../../state/pokemon/selectors';
import { startLoadDecksAction } from '../../state/pokemon/actions';

class DeckContainer extends Component {

    componentDidMount() {
        const { executeLoadDecks } = this.props;
        executeLoadDecks();
    }

    render(){
        const { decknames } = this.props
        return (
            <DeckComponent decknames={decknames} />
        )
    }
}

const mapStateToProps = state => {
  return {
      decknames: getDecknames(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
      executeLoadDecks: () => {
          dispatch(startLoadDecksAction())
      },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (DeckContainer);
