import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import PreviewMUI from './components/pages/PreviewMUI'
import theme from './reducers/theme'


const store = createStore(
  combineReducers({
    routing: routerReducer,
    theme
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
