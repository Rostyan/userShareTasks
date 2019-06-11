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


export default class Rout extends Component {
  render() {
    return (

      <Router >
        <div>
          <Headers />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/list" exact component={List} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    )
  }
}
