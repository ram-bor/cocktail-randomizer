import React from 'react';
import './RandomDrink.css';
import RandomDrinkCard from '../../components/RandomDrinkCard/RandomDrinkCard';

function RandomDrink() {
  return (
    <div className="random-drink">
      <div className="card-container">
        <RandomDrinkCard />
      </div>
    </div>
  );
}

export default RandomDrink;
