import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Header from './Header'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="*">
        <Header/>
      </Route>
    </Switch>
  </Router>
)

export default Routes
