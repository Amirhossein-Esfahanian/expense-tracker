import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Dashboard from "./components/dashboard";
import NotFound from "./components/not-found";
import SideBar from "./components/sideBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Dashboard></Dashboard>
        <div className="content">
          <Switch>
            <Route path="/customers" component={NotFound} />
            <Route path="/" component={NotFound} />
            <Redirect from="/index" to="/" exact />

            {/* <Route path="/" exact component={<Dashboard></Dashboard>} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}
