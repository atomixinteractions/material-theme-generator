import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router'
import { ThemeProvider } from 'styled-components'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import createHashHistory from 'history/lib/createHashHistory'

import MuiGeneratorPage from './components/pages/MuiGenerator'
import NotFoundPage from './components/pages/NotFound'

import { Theme } from './styles'

// TODO: delete

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AllComponentsViewPage from './pages/AllComponentsViewPage'
// import ThemePreview from './pages/ThemePreview'
// import MuiTheme from './styles/Theme'


class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object,
  };

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  handleChangeMuiTheme = (muiTheme) => {
    this.setState({
      muiTheme: getMuiTheme(muiTheme),
    });
  };

  componentWillMount() {
    this.handleChangeMuiTheme(MuiTheme)
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.handleChangeMuiTheme(newMuiTheme)
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={this.state.muiTheme}>
        <Router history={createBrowserHistory()}>
          <Route path="/" component={() => <ThemePreview onChangeMuiTheme={this.handleChangeMuiTheme} />} />
          {/* <Route path="/" exactly component={AllComponentsViewPage} /> */}
        </Router>
      </MuiThemeProvider>
    )
  }
}

const Root = () => (
  <ThemeProvider theme={Theme}>
    <Router history={createHashHistory()}>
      <Route path="/" component={MuiGeneratorPage} />

      <Route path="*" component={NotFoundPage} />
    </Router>
  </ThemeProvider>
)

export default Root
