import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Catalogs from './Catalogs'

const Routes = () => (
  <Provider store={store}>
    <Router>
        <Route path="/catalogs"><Catalogs/></Route>
    </Router>
  </Provider>
)

export default Routes
