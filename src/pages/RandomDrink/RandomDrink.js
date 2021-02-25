import React from 'react';
import './RandomDrink.css';
import Button from '../../components/Button/Button';
import RandomDrinkCard from '../../components/RandomDrinkCard/RandomDrinkCard';

function RandomDrink() {
  return (
    <div className="random-drink-parent">
      <div className="random-drink">
        <div className="card-container">
          <RandomDrinkCard />
        </div>
        <div className="button-container">
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default RandomDrink;
