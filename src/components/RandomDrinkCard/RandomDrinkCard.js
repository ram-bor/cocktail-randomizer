import React from 'react';

export default function RandomDrinkCard(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <img
            src="https://i.kym-cdn.com/photos/images/original/001/285/680/e17.jpg"
            className="card-img"
            style={{ width: '18rem' }}
            alt="Place holder image"
          />
          <h1 className="drink-name">{props.name}</h1>
          <h5 className="drink-id">{props.id}</h5>
        </div>
      </div>
    </div>
  );
}
