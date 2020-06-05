import {Router, Route, Switch} from "react-router-dom";
import React, {Component} from "react";
import history from "./history";

import Header from "../components/Header";
import Home from "./Home";
import Checkout from "./Checkout";

export class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
