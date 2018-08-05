import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getLibraryRows, getDb, isQueryRunning, getSets } from '../../state/pokemon/selectors';
import { startQueryAction, selectCardAction, addCardToDeckAction } from '../../state/pokemon/actions';

import LibraryComponent from '../components/library/LibraryComponent';

class LibraryContainer extends Component {

    executeQuery = ( query ) => {
        const { executeQueryDispatch, db } = this.props;
        executeQueryDispatch(query,db);
    }

    selectCard = ( cardId ) => {
        const { executeSelectCard } = this.props;
        executeSelectCard(cardId);
    }

    addCardToDeck = (cardId) => {
        const { executeAddCardToDeckAction } = this.props;
        executeAddCardToDeckAction(cardId);
    }

    render(){
        const { libraryRows, isQueryRunning, sets } = this.props
        return (
            this.selectCard !== {} && <LibraryComponent rows={libraryRows} executeQuery={this.executeQuery} isQueryRunning={isQueryRunning} sets={sets}
                selectCard={this.selectCard} addCardToDeck={this.addCardToDeck} />
        )
    }
}

const mapStateToProps = state => {
  return {
      libraryRows: getLibraryRows(state),
      db: getDb(state),
      sets: getSets(state),
      isQueryRunning: isQueryRunning(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    executeQueryDispatch: (query, db) => {
        dispatch(startQueryAction(query, db))
    },
    executeSelectCard: (cardId) => {
        dispatch(selectCardAction(cardId))
    },
    executeAddCardToDeckAction: (cardId) => {
        dispatch(addCardToDeckAction(cardId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (LibraryContainer);
