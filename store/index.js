import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import search from './search'

export default createStore(
  combineReducers({ search }),
  applyMiddleware(thunkMiddleware)
)
