import React from 'react';

export default function DrinkCard(props) {
  return (
    <div className="drink-card">
      <ul>
        <li>Icon: {props.icon}</li>
        <li>Name: {props.name}</li>
        <li>Glass: {props.glass}</li>
        <li>Ingredients: {props.ingredients}</li>
        <li>Instructions: {props.instructions}</li>
      </ul>
    </div>
  );
}
