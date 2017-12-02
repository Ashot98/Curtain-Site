import { SET_ACTIVE } from '../actions/types';

export default function(state='main', action) {
  switch(action.type) {
    case SET_ACTIVE:
      return action.data;
  }
  
  return state;
}