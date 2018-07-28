import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import LibraryComponent from '../components/library/LibraryComponent'

class LibraryContainer extends Component {

    render(){
        return (
            <Paper>
                <LibraryComponent />
            </Paper>
        )
    }
}

export default LibraryContainer;
