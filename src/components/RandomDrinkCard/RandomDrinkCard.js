import React, { Component } from 'react';
import axios from 'axios';

let url = 'https://powerful-mountain-75920.herokuapp.com/cocktails/';
let randomDrinkUrl =
  'https://powerful-mountain-75920.herokuapp.com/cocktails/cocktail';

export default class RandomDrinkCard extends Component {
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
  }
  loadData = () => {
    axios
      .get(randomDrinkUrl)
      .then(res => {
        let randomDrink = res.data[0];
        console.dir(randomDrink);
        this.setState({
          dataReady: true,
          drinks: randomDrink,
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
      })
      .catch(err => {
        console.log('Error! ', err);
      });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div class="card">
        <img
          src="..."
          class="card-img"
          style={{ width: '18rem' }}
          alt="(Image here)"
        />
        <div class="card-body">
          <h4 class="card-title"></h4>
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
