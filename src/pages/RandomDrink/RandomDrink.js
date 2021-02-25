import React from 'react';
import './RandomDrink.css';
import Button from '../../components/Button/Button';
import RandomDrinkCard from '../../components/RandomDrinkCard/RandomDrinkCard';
import DrinkInfo from '../DrinkInfo/DrinkInfo';
import { Router, Route, Link } from 'react-router-dom';

function RandomDrink() {
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
            <Route path="/drinkinfo" component={DrinkInfo} />
            <Route path="/drinks" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomDrink;
