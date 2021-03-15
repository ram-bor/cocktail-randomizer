import React, { Component } from 'react';
import './RandomDrink.css';
import Button from '../../components/Button/Button';
import RandomDrinkCard from '../../components/RandomDrinkCard/RandomDrinkCard';
import DrinkInfo from '../DrinkInfo/DrinkInfo';
import Shaker from '../Shaker/Shaker';
import { Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';

export class RandomDrink extends Component {
  constructor() {
    super();
  }
  renderAcceptedDrink = () => {
    alert('drink loading....');
  };

  render() {
    return (
      <div className="random-drink-parent">
        <div className="random-drink">
          <div className="card-container">
            <RandomDrinkCard />
          </div>
          <div className="button-container">
            <div>
              <Link to="/shaker">
                <Button />
              </Link>
              <p>Choose again!</p>
            </div>
            <div>
              <Link to="/drinkinfo">
                <Button onClick={this.renderAcceptedDrink} />
              </Link>
              <p>Yes please!</p>
            </div>
            <div>
              <Route path="/drinkinfo" component={DrinkInfo} />
              <Route path="/shaker" component={Shaker} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomDrink;
