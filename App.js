import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Routes from './Routes'

export default (props) => (
  <Provider store={store}>
    <Routes {...props} />
  </Provider>
)
