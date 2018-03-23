import thunkMiddleware from 'redux-thunk'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers'

const initialState = {

}

const store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
)

export default ( ) => (
  <Provider store={store}>
    <Routes />
  </Provider>
)
