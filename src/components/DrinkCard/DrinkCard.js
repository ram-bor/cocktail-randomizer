import React, { Component } from 'react';
// import { loadData } from '../RandomDrinkCard/RandomDrinkCard';

export default class DrinkCard extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="drink-card">
        <ul>
          {/* <li>Icon: {this.state.icon}</li>
          <li>Name: {this.state.name}</li>
          <li>Glass: {this.state.glass}</li>
          <li>Ingredients: {this.state.ingredients}</li>
          <li>Instructions: {this.state.instructions}</li> */}
          <li>{this.props.method}</li>
        </ul>
      </div>
    );
  }
}
