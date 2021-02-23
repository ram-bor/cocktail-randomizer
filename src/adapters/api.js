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
    };
  }

  render() {
    return (
      <div>
        {this.state.drinks.map(drinks => {
          
        }
      </div>
    );
  }

  componentDidMount() {
    axios.get(url).then(response => {
      const drinks = response.data;
      this.setState({ drinks });
      console.log(drinks);
      console.log(
        'Success, component did Mount! Axios made HTTP request to url and produced JSON format data'
      );
    });
  }

  componentDidUpdate() {
    console.log('Component did update!');
  }
}
