import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'

const Routes = ({ StaticRouter, location }) => {
  const Router = StaticRouter || BrowserRouter;
  return (
    <Router location={location}>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>)
  }

export default Routes
