import { SET_ACTIVE, GET_IMAGES, DELETE_IMAGES, AUTH_USER, LOCALSTORAGE_USER, LOGOUT } from './types'; 
import axios from 'axios';
import config from "../../../config";

export function setActive(active) {
  return {
    type: SET_ACTIVE,
    data: active
  }
}

export function getImages(type) {
  const url = `${config.api_server}photos/type=${type}`;
  const request = axios.get(url, {}, {
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

export function deleteImages(id) {
  const url = `${config.api_server}photos/${id}`;
  const request = axios.delete(url);

  return {
    type: DELETE_IMAGES,
    payload: request
  }
}

export function authUser(credentials) {
  const url = `${config.api_server}login`;
  const request = axios.post(url, credentials);

  return {
    type: AUTH_USER,
    payload: request
  }
}

export function fromLocalStorage(user) {
  const userObj = JSON.parse(user);
  const url = `${config.api_server}checktoken`;
  const request = axios.post(url, { user: userObj });
  return {
    type: LOCALSTORAGE_USER,
    payload: request
  }
}

export function logoutUser() {
  
  localStorage.removeItem('jakkardUserInfo');
  
  return {
    type : LOGOUT,
    payload: false
  }
}