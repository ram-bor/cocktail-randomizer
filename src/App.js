import './App.css';
import Home from './pages/Home/Home.js';
import Shaker from './pages/Shaker/Shaker.js';

import { Route, Link } from 'react-router-dom';
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
          <Link to="/shaker" ></Link>
        </div>
        <main>
          <Route path="/home" component={Home} />
          <Route path="/shaker" component={Shaker} />
        </main>
      </div>
    );
  }
}

export default App;
