import { GET_IMAGES } from '../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case GET_IMAGES:
      return action.payload.data;
  }
  
  return state;
}