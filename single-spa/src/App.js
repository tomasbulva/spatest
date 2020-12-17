import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Home';
import FirstPost from './posts/Post-1';
import SecondPost from './posts/Post-2';
import ThirdPost from './posts/Post-3';
import FourthPost from './posts/Post-4';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/posts/post-1">
          <FirstPost />
        </Route>
        <Route path="/posts/post-2">
          <SecondPost />
        </Route>
        <Route path="/posts/post-3">
          <ThirdPost />
        </Route>
        <Route path="/posts/post-4">
          <FourthPost />
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
    </Router>
  )
}
