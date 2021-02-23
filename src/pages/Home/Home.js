import React from 'react';
import './Home.css';
import Button from '../../components/Button/Button';
import Shaker from '../Shaker/Shaker';
import { Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <header className="home-content">
        <h1> ~ App Logo Here ~ </h1>
        <div>
          <Link to="/shaker">
            <Button />
          </Link>
        </div>
        <div>
          <Route path="/shaker" component={Shaker} />
        </div>
      </header>
    </div>
  );
}

export default Home;
