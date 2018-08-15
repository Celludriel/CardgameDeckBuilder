import React, {Component} from 'react';
import { connect } from 'react-redux';

import DeckComponent from '../components/deck/DeckComponent'
import { getDecknames, getCurrentDeck, getDeckFilter,
    getFilteredDeck } from '../../state/pokemon/selectors';
import { startLoadDecksAction, startSaveDeckAction,
    selectDeckAction, startDeleteDeckAction, selectCardAction,
    removeCardFromDeckAction, updateDeckFilterAction } from '../../state/pokemon/actions';

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

    selectCard = ( cardId ) => {
        const { executeSelectCard } = this.props;
        executeSelectCard(cardId);
    }

    removeCardFromDeck = (cardId) => {
        const { executeRemoveCardFromDeckAction } = this.props;
        executeRemoveCardFromDeckAction(cardId);
    }

    updateDeckFilter = (event) => {
        const { executeUpdateDeckFilterAction } = this.props;
        executeUpdateDeckFilterAction(event);
    }

    render(){
        const { decknames, currentDeck, filteredDeck, deckFilter } = this.props
        return (
            <DeckComponent decknames={decknames} saveDeckAction={this.saveDeck}
                deleteDeckAction={this.deleteDeck} selectDeck={this.selectDeck}
                data={currentDeck.cards} selectCard={this.selectCard}
                removeCardFromDeck={this.removeCardFromDeck}
                updateDeckFilter={this.updateDeckFilter}
                deckFilter={deckFilter}
                visibleData={filteredDeck} />
        )
    }
}

const mapStateToProps = state => {
  return {
      decknames: getDecknames(state),
      currentDeck: getCurrentDeck(state),
      deckFilter: getDeckFilter(state),
      filteredDeck: getFilteredDeck(state)
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
      executeSelectCard: (cardId) => {
          dispatch(selectCardAction(cardId))
      },
      executeRemoveCardFromDeckAction: (cardId) => {
          dispatch(removeCardFromDeckAction(cardId))
      },
      executeUpdateDeckFilterAction: (event) => {
          dispatch(updateDeckFilterAction(event))
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (DeckContainer);
