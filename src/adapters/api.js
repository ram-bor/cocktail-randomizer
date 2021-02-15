import Axios from 'axios';

export default axiosInstance(() => {
  return Axios.create(initializers);
});

export function get(url) {
    const axios = axiosInstance()
    return axios.get(url)
}

export 