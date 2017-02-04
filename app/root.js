import React from 'react'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import PreviewMUI from './components/pages/PreviewMUI'
import themeReducer from './reducers/theme'
import setupReducer from './reducers/setup'


const store = createStore(
  combineReducers({
    routing: routerReducer,
    theme: themeReducer,
    setup: setupReducer,
  }),
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore(browserHistory, store)
console.log('=', PreviewMUI)
const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={PreviewMUI} />
    </Router>
  </Provider>
)

export default App
