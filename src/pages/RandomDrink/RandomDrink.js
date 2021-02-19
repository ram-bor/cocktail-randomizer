import React from 'react';
import './RandomDrink.css';
import RandomDrinkCard from '../../components/RandomDrinkCard/RandomDrinkCard';
import Api from '../../adapters/Api';

function RandomDrink() {
  return (
    <div className="random-drink">
      <div className="card">
        <RandomDrinkCard />
        <Api />
      </div>
    </div>
  );
}

export default RandomDrink;
