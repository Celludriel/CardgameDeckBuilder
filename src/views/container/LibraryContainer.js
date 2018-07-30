import React, {Component} from 'react';
import { connect } from 'react-redux'

import { getLibraryRows, getDb, isQueryRunning } from '../../state/pokemon/selectors'
import { startQueryAction } from '../../state/pokemon/actions'

import LibraryComponent from '../components/library/LibraryComponent'

class LibraryContainer extends Component {

    componentDidMount(){
        const { executeQueryDispatch, db } = this.props;
        executeQueryDispatch({name: {$eq: 'Dragonite'}},db);
    }

    executeQuery = (query ) => {
        const { executeQueryDispatch, db } = this.props;
        executeQueryDispatch(query,db);
    }

    render(){
        const { libraryRows, isQueryRunning } = this.props
        return (
            <LibraryComponent rows={libraryRows} executeQuery={this.executeQuery} isQueryRunning={isQueryRunning} />
        )
    }
}

const mapStateToProps = state => {
  return {
      libraryRows: getLibraryRows(state),
      db: getDb(state),
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
