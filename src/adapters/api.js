// import axios from 'axios';
// import React from 'react';

// var url = 'https://powerful-mountain-75920.herokuapp.com/cocktails';

// export default class Api extends React.Component {
//   state = {
//     drinks = []
//   }

//   componentDidMount() {
//       axios.get(url)
//           .then(response => {
//             const drinks = response.data
//             this.setState({ drinks })
//           })
//   }

//   render() {
//       return (
//           <ul> {this.state.drinks.map(drinks => <li>{drinks.name}</li> )} </ul>
//       )
//   }
// }

// using Axios create method to instantiate  Data object
// export default axiosInstance(() => {
//   return Axios.create(initializers);
// });

// // create function to GET data from url given using function made above to create instance
// export function get(url) {
//   const axios = axiosInstance();
//   return axios.get(url);
//   console.log(url);
// }

// export function post(url, reqData) {
//   const axios = axiosInstance();
//   return axios.post(url, reqData);
// }
