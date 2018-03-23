import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PartnerContainer from './containers/PartnerContainer'

const Routes = () => (
    <Router>
      <Switch>
        <Route path="/" component={SearchContainer} />
      </Switch>
    </Router>
  )

export default Routes
