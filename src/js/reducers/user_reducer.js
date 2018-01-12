import { AUTH_USER } from '../actions/types';

export default function(state=false, action) {
  switch(action.type) {
    case AUTH_USER:
      if(action.payload.data) {
        console.log(action.payload.data)
        return action.payload.data;
      }
  }
  
  return state;
}