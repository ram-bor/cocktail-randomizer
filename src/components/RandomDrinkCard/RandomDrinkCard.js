import React from 'react';

export default function RandomDrinkCard(props) {
  return (
    <div class="card">
      <img
        src="..."
        class="card-img-top"
        style={{ width: '18rem' }}
        alt="(Image here)"
      />
      <div class="card-body">
        <h4 class="card-title">Card title aka NAME</h4>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. (name will go here)
        </p>
        <a href="/" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}