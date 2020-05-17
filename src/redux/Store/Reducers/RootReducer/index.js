import {combineReducers} from 'redux';
import MovieReducer from '../MovieReducer';
import MovieDetail from '../MovieDetail';
import Credentials from '../credentials';

const RootReducer = combineReducers({
  movieReducer: MovieReducer,
  movieDetail: MovieDetail,
  credentials: Credentials,
});

export default RootReducer;
