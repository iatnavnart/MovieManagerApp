import {combineReducers} from 'redux';
import MovieReducer from '../MovieReducer';
import MovieDetail from '../MovieDetail';

const RootReducer = combineReducers({
  movieReducer: MovieReducer,
  movieDetail: MovieDetail,
});

export default RootReducer;
