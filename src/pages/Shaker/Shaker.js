import React from 'react';
import './Shaker.css';
import { Route, Link } from 'react-router-dom';

function Shaker() {
  return (
    <div className="shaker">
      <Link> to="/shaker</Link>
      <h1>Shaker will "shake" what its mama gave it here</h1>
      <h3>(This will be on page 2)</h3>
    </div>
  );
}

export default Shaker;
