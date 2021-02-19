import React from 'react';
import './Home.css';
import Button from '../../components/Button/Button';
import Shaker from '../Shaker/Shaker';
import Api from '../../adapters/Api';
import { Route, Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="home">
      <header className="home-header">
        <p>
          <h1> ~ App Logo Here ~ </h1>
        </p>
        <div>
          <Link to="/shaker">
            {' '}
            <Button />{' '}
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
