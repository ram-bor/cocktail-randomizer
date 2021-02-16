import React from 'react';
import './RandomDrink.css';
import RandomDrinkCard from '../../components/RandomDrinkCard/RandomDrinkCard';
import Api from '../../adapters/Api';

function RandomDrink() {
  return (
    <div className="random-drink">
      <h1>
        Random drink will <b>splash</b> here
      </h1>
      {/*  */}
      <RandomDrinkCard />
      <Api />
    </div>
  );
}

export default RandomDrink;
