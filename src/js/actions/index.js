import { SET_ACTIVE, GET_IMAGES } from './types'; 
import axios from 'axios';
import config from "../../config";

export function setActive(active) {
  return {
    type: SET_ACTIVE,
    data: active
  }
}

export function getImages(type) {
  const url = `${config.api_server}photos/type=${type}`;
  const request = axios.get(url, {}, {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
  });
  
  return {
    type: GET_IMAGES,
    payload: request
  }
}