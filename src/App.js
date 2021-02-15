import './App.css';
import Home from './pages/Home/Home.js';
import Shaker from './pages/Shaker/Shaker.js';
import DrinkChoice from './pages/DrinkChoice/DrinkChoice.js';
import DrinkInfo from './pages/DrinkInfo/DrinkInfo.js';
import Api from './adapters/Api';

import React, { Component } from 'react';

export class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   page: 'home',
    // };
    // Bind any methods below
  }
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
