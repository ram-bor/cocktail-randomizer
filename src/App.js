import './App.css';
import Home from './pages/Home/Home.js';
import Shaker from './pages/Shaker/Shaker.js';
import DrinkChoice from './pages/DrinkChoice/DrinkChoice.js';
import DrinkInfo from './pages/DrinkInfo/DrinkInfo.js';

import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Shaker />
        <DrinkChoice />
        <DrinkInfo />
      </div>
    );
  }
}

export default App;
