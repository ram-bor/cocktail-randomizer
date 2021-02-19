import './App.css';
import Home from './pages/Home/Home.js';
import Shaker from './pages/Shaker/Shaker.js';
import Button from './components/Button/Button';

import { Route, Link, Redirect } from 'react-router-dom';
import Api from './adapters/Api';
import React, { Component } from 'react';

export class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/home"></Link>
          <Link to="/shaker"></Link>
        </div>
        <main>
          <Route path="/home" render={() => <Home />} />
          <Route path="/shaker" render={() => <Shaker />} />
        </main>
      </div>
    );
  }
}

export default App;
