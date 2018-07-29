import React, {Component} from 'react';
import { connect } from 'react-redux'

import LibraryComponent from '../components/library/LibraryComponent'
import { querylibrary } from '../../state/pokemon/selectors'

class LibraryContainer extends Component {

    render(){
        const { libraryRows } = this.props;
        debugger
        return (
            <LibraryComponent rows={libraryRows} />
        )
    }
}

const mapStateToProps = state => {
  return {
      libraryRows: querylibrary(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (LibraryComponent);
