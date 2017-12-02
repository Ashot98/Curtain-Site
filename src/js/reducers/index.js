import { combineReducers } from 'redux';
import ActiveReducer from './active_reducer';

const rootReducer = combineReducers({
  //Here We Define Reducers
  active: ActiveReducer
});

export default rootReducer;