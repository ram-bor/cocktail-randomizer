import Axios from 'axios';

url = 'https://powerful-mountain-75920.herokuapp.com/cocktails';

// using Axios create method to instantiate  Data object
export default axiosInstance(() => {
  return Axios.create(initializers);
});

// create function to GET data from url given using function made above to create instance
export function get(url) {
  const axios = axiosInstance();
  return axios.get(url);
}

export function post(url, reqData) {
  const axios = axiosInstance();
  return axios.post(url, reqData);
}

