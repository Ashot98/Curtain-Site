import { AUTH_USER, LOCALSTORAGE_USER } from '../actions/types';

export default function(state=false, action) {
  switch(action.type) {
    case AUTH_USER:
      if(action.payload.data) {
        localStorage.setItem('jakkardUserInfo', JSON.stringify(action.payload.data));
        return action.payload.data;
      }
      if(action.error)
        return { error: action.error };
    case LOCALSTORAGE_USER:
      return action.payload.data;
  }
  
  return state;
}