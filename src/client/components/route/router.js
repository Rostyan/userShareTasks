import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Headers from './headers'
import Home from '../Home'
import List from '../lists/List';
import Register from '../register';
import Login from '../login';


export default class Rout extends Component {
  render() {
    return (

      <Router >
        <div>
          <Headers />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/list" exact component={List} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    )
  }
}
