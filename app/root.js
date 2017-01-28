import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import AllComponentsViewPage from './pages/AllComponentsViewPage'

import theme from './reducers/theme'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    routing: routerReducer,
    theme
  }),
  applyMiddleware(thunk)
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AllComponentsViewPage} />
    </Router>
  </Provider>
)

export default App
