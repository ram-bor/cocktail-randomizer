import React from 'react';
import './Shaker.css';
import RandomDrink from '../RandomDrink/RandomDrink';
import Button from '../../components/Button/Button';
import { Route, Link } from 'react-router-dom';

function Shaker() {
  return (
    <div className="container">
      <div className="shaker">
        <h1>Shaker will "shake" what its mama gave it here</h1>
        <div>
          <Link to="/drinks">
            <Button />
          </Link>
        </div>
        <div>
          {' '}
          <Route path="/drinks" component={RandomDrink} />{' '}
        </div>
      </div>
    </div>
  );
}

export default Shaker;
