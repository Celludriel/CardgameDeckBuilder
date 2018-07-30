import React, {Component} from 'react';
import { connect } from 'react-redux'

import LibraryComponent from '../components/library/LibraryComponent'

class LibraryContainer extends Component {

    render(){
        return (
            <LibraryComponent rows={[]} />
        )
    }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (LibraryContainer);
