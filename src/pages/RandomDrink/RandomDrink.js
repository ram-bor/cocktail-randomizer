import React from 'react';
import './RandomDrink.css';
import Button from '../../components/Button/Button';
import RandomDrinkCard from '../../components/RandomDrinkCard/RandomDrinkCard';
import DrinkChoice from '../DrinkInfo/DrinkInfo';
import { Route, Link } from 'react-router-dom';

function RandomDrink() {
  function loadDrinkChoice() {
    console.log('Go button clicked. Loading Drink Choice information');
  }
  return (
    <div className="random-drink-parent">
      <div className="random-drink">
        <div className="card-container">
          <RandomDrinkCard />
        </div>
        <div className="button-container">
          <div>
            <Link to="/drinks">
              <Button />
            </Link>
            <p>Choose again!</p>
          </div>
          <div>
            <Link to="/drinkinfo">
              <Button />
            </Link>
            <p>Yes please!</p>
          </div>
          <div>
            <Route path="/drinkinfo" component={DrinkChoice} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomDrink;
