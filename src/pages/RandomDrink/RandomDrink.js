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
          <div>
            <Button />
            <p>Choose again!</p>
          </div>
          <div>
            <Button />
            <p>Yes please!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomDrink;
