import React, {Component, PropTypes} from 'react';
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AllComponentsViewPage from './pages/AllComponentsViewPage'
import ThemePreview from './pages/ThemePreview'

import Theme from './styles/Theme'


class App extends Component {

  static childContextTypes = {
    muiTheme: PropTypes.object,
  };

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  handleChangeMuiTheme(muiTheme) {
    this.setState({
      muiTheme: getMuiTheme(muiTheme),
    });
  };

  componentWillMount() {
    this.handleChangeMuiTheme(Theme)
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.handleChangeMuiTheme(newMuiTheme)
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={this.state.muiTheme}>
        <Router history={createBrowserHistory()}>
          <Route
            path="/"
            component={() => (
              <ThemePreview onChangeMuiTheme={this.handleChangeMuiTheme.bind(this)}/>
            )}
          />
          {/* <Route path="/" exactly component={AllComponentsViewPage} /> */}
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
