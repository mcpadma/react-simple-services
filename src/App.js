import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch } from "react-router-dom"

import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Routes/>
        </Switch>       
      </Fragment>
    );
  }
}

export default App;
