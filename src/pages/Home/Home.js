import React from 'react';
import './Home.css';
import Button from '../../components/Button/Button';
import Api from '../../adapters/Api';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <p>
          <h1>~ Cocktail Randomizer Name or Logo Here ~</h1>
          <Button />
        </p>
      </header>
    </div>
  );
}

export default Home;
