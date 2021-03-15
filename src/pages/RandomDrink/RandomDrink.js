import React, { Component } from 'react';
import './RandomDrink.css';
import RandomDrinkCard from '../../components/RandomDrinkCard/RandomDrinkCard';
import Button from '../../components/Button/Button';
import DrinkInfo from '../../pages/DrinkInfo/DrinkInfo';
import Shaker from '../../pages/Shaker/Shaker';
import { Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

let url = 'https://powerful-mountain-75920.herokuapp.com/cocktails/';
let randomDrinkUrl =
  'https://powerful-mountain-75920.herokuapp.com/cocktails/cocktail';
let idURL =
  'https://powerful-mountain-75920.herokuapp.com/cocktails/cocktail/id/';

export class RandomDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      dataReady: false,
      image: '',
      id: '',
      name: '',
      category: '',
      glass: '',
      instructions: '',
    };
    // this.id = this.state.id;
  }

  loadData = () => {
    axios
      .get(randomDrinkUrl)
      .then(res => {
        let randomDrink = res.data[0];
        this.setState({
          dataReady: true,
          drink: randomDrink,
          id: randomDrink._id,
          name: randomDrink.name,
          category: randomDrink.category,
          glass: randomDrink.glass,
          ingredients: randomDrink.ingredients,
          instructions: randomDrink.instructions,
        });
        console.log(
          'Success, component did mount! Axios made HTTP request to url and loaded data'
        );
        console.log(this.state.drink);
        return randomDrink;
      })
      .catch(err => {
        console.log('Error! ', err);
      });
  };

  componentDidMount() {
    this.loadData();
  }

  loadAcceptedDrink = () => {
    console.log(this.id);
  };

  render() {
    if (this.state.dataReady === true) {
      return (
        <div className="random-drink-parent">
          <div className="random-drink">
            <RandomDrinkCard name={this.state.name} id={this.state.id} />
          </div>
          <div className="button-container">
            <div>
              <Link to="/shaker">
                <Button />
              </Link>
              <p>Choose again!</p>
            </div>
            <div>
              <Link to="/drinkinfo">
                <Button />
              </Link>
              <p>Yes please!</p>
            </div>
            <div>
              <Route path="/drinkinfo" component={DrinkInfo} />
              <Route path="/shaker" component={Shaker} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default RandomDrink;
