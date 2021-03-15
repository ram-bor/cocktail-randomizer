import React from 'react';
import './DrinkInfo.css';
import DrinkCard from '../../components/DrinkCard/DrinkCard';

function DrinkInfo(props) {
  return (
    <div className="drinkinfo">
      <h1>
        Drink Information will be <i>drinksplayed</i> here
      </h1>
      {/* <DrinkCard /> */}
      {props.info}
    </div>
  );
}

export default DrinkInfo;
