import axios from 'axios';
import React, { Component } from 'react';

let url = 'https://powerful-mountain-75920.herokuapp.com/cocktails/';
let randomDrinkUrl =
  'https://powerful-mountain-75920.herokuapp.com/cocktails/cocktail';

export default class Api extends Component {
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

  componentDidMount() {
    axios
      .get(randomDrinkUrl)
      .then(res => {
        console.dir(res.data);
        this.setState({
          dataReady: true,
          drinks: res.data,
        });
        console.log(
          'Success, component did Mount! Axios made HTTP request to url and loaded data'
        );
      })
      .catch(err => {
        console.log('Error! ', err);
      });
  }

  render() {
    return (
      <div>
        {/* {this.state.drinks.map(drinks => ( */}
        {/* // <p>{drinks.name}</p>
        // <p>{drinks.category}</p>
        // <p>{drinks.glass}</p>
        // <p>{drinks.ingredients}</p> */}
        {/* ))} */}
      </div>
    );
  }
}
