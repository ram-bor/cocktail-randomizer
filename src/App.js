import './App.css';
import Home from './pages/Home/Home.js';
import Shaker from './pages/Shaker/Shaker.js';
import RandomDrink from './pages/RandomDrink/RandomDrink';

import { Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import DrinkInfo from './pages/DrinkInfo/DrinkInfo';

export class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <main className="app">
        <div className="app-container">
          <div>
            <Link to="/"></Link>
            <Link to="/shaker"></Link>
            <Link to="/drinks"></Link>
            <Link to="/drinkinfo"></Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shaker" component={Shaker} />
            <Route exact path="/drinks" component={RandomDrink} />
            <Route exact path="/drinkinfo" component={DrinkInfo} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
