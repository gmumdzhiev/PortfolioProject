
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'
import { reducer as oldLocationReducer } from './oldLocation';

import thunk from 'redux-thunk';

const history = createBrowserHistory()

const reducer = combineReducers({
  router: routerReducer,
  oldLocation: oldLocationReducer,

})

const store = createStore(reducer,
  applyMiddleware(thunk, routerMiddleware(history)),

);

startListener(history, store)


export default store
