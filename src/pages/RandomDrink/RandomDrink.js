import React, { Component } from 'react';
import './RandomDrink.css';
import RandomDrinkCard from '../../components/RandomDrinkCard/RandomDrinkCard';

// export class RandomDrink extends Component {
export function RandomDrink() {
  // constructor() {
  //   super();
  // }

  // render() {
  return (
    <div className="random-drink-parent">
      <div className="random-drink">
        <div className="card-container">
          <RandomDrinkCard />
        </div>
      </div>
    </div>
  );
  // }
}

export default RandomDrink;
