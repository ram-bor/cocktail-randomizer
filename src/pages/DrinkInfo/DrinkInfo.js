import React, { Component } from 'react';
import './DrinkInfo.css';
import DrinkCard from '../../components/DrinkCard/DrinkCard';

export class DrinkInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="drinkinfo">
        <h1>
          Drink Information will be <i>drinksplayed</i> here
        </h1>
        <h3>(last page)</h3>
        <DrinkCard
          icon="pic"
          name="fuk me up fam"
          glass="martini glass idk"
          ingredients="poison"
          instructions="run away"
        />
      </div>
    );
  }
}

export default DrinkInfo;
