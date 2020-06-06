import {combineReducers} from 'redux';
import movies from './movie';
const rootReducer = combineReducers({
  //toàn bộ data(state) chứa ở đây
  movies,
});

export default rootReducer;
