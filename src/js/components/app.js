import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./header";
import Main from "./main-page";


export default class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Switch>
              <Route exact path='/' component='Main' />
            </Switch>
        </div>
    );
  }
}