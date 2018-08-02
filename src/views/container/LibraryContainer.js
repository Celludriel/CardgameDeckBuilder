import React, {Component} from 'react';
import { connect } from 'react-redux'

import { getLibraryRows, getDb, isQueryRunning, getSets } from '../../state/pokemon/selectors'
import { startQueryAction } from '../../state/pokemon/actions'

import LibraryComponent from '../components/library/LibraryComponent'

class LibraryContainer extends Component {

    componentDidMount(){
        const { executeQueryDispatch, db } = this.props;
        executeQueryDispatch({},db);
    }

    executeQuery = (query ) => {
        const { executeQueryDispatch, db } = this.props;
        executeQueryDispatch(query,db);
    }

    render(){
        const { libraryRows, isQueryRunning, sets } = this.props
        return (
            <LibraryComponent rows={libraryRows} executeQuery={this.executeQuery} isQueryRunning={isQueryRunning} sets={sets} />
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
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (LibraryContainer);
