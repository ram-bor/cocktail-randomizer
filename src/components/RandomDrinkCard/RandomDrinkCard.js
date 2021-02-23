import React, { Component } from 'react';

import Api from '../../adapters/Api';

export default class RandomDrinkCard extends Component {
  constructor(props)
  super(props)
  
  render() {
    return (
      <div class="card">
        <img
          src="..."
          class="card-img-top"
          style={{ width: '18rem' }}
          alt="(Image here)"
        />
        <div class="card-body">
          <h4 class="card-title">(Drink Name)</h4>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. (Drink here)
          </p>
          <a href="/" class="btn btn-danger">
            No! Choose another drink chosen
          </a>
          <a href="/" class="btn btn-primary">
            Yes! Go to specific drink
          </a>
        </div>
      </div>
    );
  }
}
