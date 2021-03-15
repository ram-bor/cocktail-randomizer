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
    if (this.state.dataReady === true) {
      return (
        <div class="card">
          <div class="card-body">
            <img
              src="https://i.kym-cdn.com/photos/images/original/001/285/680/e17.jpg"
              class="card-img"
              style={{ width: '18rem' }}
              alt="Place holder image"
            />
            <h4 class="drink-name">{this.state.name}</h4>
          </div>
        </div>
      );
    } else {
      return <div>Info not available</div>;
    }
  }
}
