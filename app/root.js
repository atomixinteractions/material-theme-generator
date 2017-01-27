import React from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Theme from './styles/Theme'
import AllComponentsViewPage from './pages/AllComponentsViewPage'

const App = () => (
  <MuiThemeProvider muiTheme={Theme}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={AllComponentsViewPage} />
    </Router>
  </MuiThemeProvider>
)

export default App
