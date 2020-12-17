import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Contacts from './Contacts'

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/contacts"><Contacts/></Route>
      </Switch>
    </Router>
  </Provider>
)

export default Routes
