import { combineReducers } from 'redux';
import ActiveReducer from './active_reducer';
import PhotoReducer from './photos_reducer';

const rootReducer = combineReducers({
  //Here We Define Reducers
  active: ActiveReducer,
  photos: PhotoReducer
});

export default rootReducer;