import { combineReducers } from 'redux';
import ActiveReducer from './active_reducer';
import PhotoReducer from './photos_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  //Here We Define Reducers
  active: ActiveReducer,
  photos: PhotoReducer,
  form: formReducer
});

export default rootReducer;