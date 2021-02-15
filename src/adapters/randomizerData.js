import { get, post } from './api';

export function getData() {
  return get(someURL);
}

export function postData(reqData) {
  return post(someURL, reqData);
}


