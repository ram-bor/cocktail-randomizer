import React from 'react';
import './Home.css';
import Button from '../../components/Button/Button';
import Shaker from '../Shaker/Shaker';
import Api from '../../adapters/Api';
import { Route, Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="home">
      <div>
        <Link to="/shaker" />
      </div>
      <header className="home-header">
        <p>
          <h1>~ {props.name} Here ~</h1>
          <Route path="/shaker" Button/> />
        </p>
      </header>
    </div>
  );
}

export default Home;
