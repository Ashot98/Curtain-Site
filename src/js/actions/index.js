import { SET_ACTIVE, GET_IMAGES } from './types'; 
import axios from 'axios';

export function setActive(active) {
  return {
    type: SET_ACTIVE,
    data: active
  }
}

export function getImages(type) {
  const url = 'http://localhost:3500/api/photos/type=' + type;
  const request = axios.get(url);
  
  return {
    type: GET_IMAGES,
    payload: request
  }
}