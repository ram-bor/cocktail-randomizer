import './App.css';
import Home from './pages/Home/Home.js';
import Shaker from './pages/Shaker/Shaker.js';
import DrinkInfo from './pages/DrinkInfo/DrinkInfo.js';

import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Shaker />
        <DrinkInfo />
      </div>
    );
  }
}

export default App;
