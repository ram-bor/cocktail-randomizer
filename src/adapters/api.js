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
      loading: true,
    };
  }
  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        console.log(response);
        const drinks = response.data;
        this.setState({ drinks });
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
        {' '}
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            {this.state.drinks.map(drinks => (
              <div>{drinks.glass}</div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
