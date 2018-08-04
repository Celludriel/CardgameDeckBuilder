import React, {Component} from 'react';
import { connect } from 'react-redux';

import DeckComponent from '../components/deck/DeckComponent'
import { getDecknames, getCurrentDeck } from '../../state/pokemon/selectors';
import { startLoadDecksAction, startSaveDeckAction,
    selectDeckAction, startDeleteDeckAction } from '../../state/pokemon/actions';

class DeckContainer extends Component {

    componentDidMount() {
        const { executeLoadDecks } = this.props;
        executeLoadDecks();
    }

    saveDeck = () => {
        const { executeSaveDeck } = this.props;
        executeSaveDeck();
    }

    deleteDeck = () => {
        const { executeDeleteDeck } = this.props;
        executeDeleteDeck();
    }

    selectDeck = (deckname) => {
        const { executeSelectDeck } = this.props;
        executeSelectDeck(deckname)
    }

    render(){
        const { decknames, currentDeck } = this.props
        return (
            <DeckComponent decknames={decknames} saveDeckAction={this.saveDeck}
                deleteDeckAction={this.deleteDeck} selectDeck={this.selectDeck}
                data={currentDeck.cards} />
        )
    }
}

const mapStateToProps = state => {
  return {
      decknames: getDecknames(state),
      currentDeck: getCurrentDeck(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
      executeLoadDecks: () => {
          dispatch(startLoadDecksAction())
      },
      executeSaveDeck: () => {
          dispatch(startSaveDeckAction())
      },
      executeDeleteDeck: () => {
          dispatch(startDeleteDeckAction())
      },
      executeSelectDeck: (deckname) => {
          dispatch(selectDeckAction(deckname))
      },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (DeckContainer);
