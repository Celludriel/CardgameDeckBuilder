import React, {Component} from 'react';
import { connect } from 'react-redux'

import { startLoadDatabaseAction } from './state/pokemon/actions'
import { isLoading } from './state/pokemon/selectors'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import LibraryContainer from './views/container/LibraryContainer';
import InfoCardContainer from './views/container/InfoCardContainer';
import DeckContainer from './views/container/DeckContainer';
import AppLoading from './views/components/common/AppLoading';

class App extends Component {

    componentDidMount() {
        const { startLoadDatabase } = this.props;
        startLoadDatabase();
    }

    render() {
        const { isLoading } = this.props;
        return (
            <div className="App">
                {isLoading && <AppLoading />}
                {!isLoading && <Paper>
                    <Grid container spacing={8}>
                        <Grid item xs={4}>
                            <LibraryContainer />
                        </Grid>
                        <Grid item xs={2}>
                            <InfoCardContainer />
                        </Grid>
                        <Grid item xs={6}>
                            <DeckContainer />
                        </Grid>
                    </Grid>
                </Paper>}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      isLoading: isLoading(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startLoadDatabase: () => {
      dispatch(startLoadDatabaseAction())
    }
  }
}

const AppReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppReduxContainer
