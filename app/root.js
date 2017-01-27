import React from 'react'
import { Router, Route } from 'react-router'
import { ThemeProvider } from 'styled-components'
import createBrowserHistory from 'history/lib/createBrowserHistory'

const DummyPage = () => (
  <div>
    Dummy page
  </div>
)

const App = () => (
  <ThemeProvider theme={{}}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={DummyPage} />
    </Router>
  </ThemeProvider>
)

export default App
