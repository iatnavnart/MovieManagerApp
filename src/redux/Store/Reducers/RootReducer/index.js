import {combineReducers} from 'redux';
import MovieReducer from '../MovieReducer';

const RootReducer = combineReducers({
  movieReducer: MovieReducer,
});

export default RootReducer;
