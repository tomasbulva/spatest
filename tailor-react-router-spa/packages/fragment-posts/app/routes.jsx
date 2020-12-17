import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import FirstPost from './posts/Post-1'
import SecondPost from './posts/Post-2'
import ThirdPost from './posts/Post-3'
import FourthPost from './posts/Post-4'

const Routes = () => (
    <Router>
      <Switch>
        <Route exact path="/posts">
          <Home/>
        </Route>
        <Route exact path="/posts/post-1">
          <FirstPost/>
        </Route>
        <Route exact path="/posts/post-2">
          <SecondPost/>
        </Route>
        <Route exact path="/posts/post-3">
          <ThirdPost/>
        </Route>
        <Route exact path="/posts/post-4">
          <FourthPost/>
        </Route>
      </Switch>
    </Router>
)



export default Routes
