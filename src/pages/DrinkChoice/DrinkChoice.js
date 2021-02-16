import React from 'react';
import './DrinkChoice.css';
import RandomDrinkCard from '../../components/RandomDrinkCard/RandomDrinkCard';

function DrinkChoice() {
  return (
    <div className="drinkchoice">
      <h1>
        Random drink will <b>splash</b> here
      </h1>
      <RandomDrinkCard />
    </div>
  );
}

export default DrinkChoice;
