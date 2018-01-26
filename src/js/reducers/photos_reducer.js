import { GET_IMAGES, DELETE_IMAGES } from '../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case GET_IMAGES:
      return action.payload.data;
    case DELETE_IMAGES:
      return action.payload.data;
  }
  
  return state;
}