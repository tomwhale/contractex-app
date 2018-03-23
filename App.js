import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Routes from './Routes'

export default ( ) => (
  <Provider store={store}>
    <Routes />
  </Provider>
)
