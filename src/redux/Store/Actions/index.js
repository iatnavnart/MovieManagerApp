import {GET} from '../../../service';
import {
  CONST_FETCH_MOVIE_COLLECTIONS,
  CONST_FETCH_MOVIE_DETAIL,
  CONST_SET_CREDENTIALS,
} from '../../../utils';
import {
  REACT_NATIVE_GET_MOVIE_INFO,
  REACT_NATIVE_GET_MOVIES,
} from 'react-native-dotenv';
export const createAction = (type, payload) => ({
  type,
  payload,
});

const actionFetchMovieCollection = payload =>
  createAction(CONST_FETCH_MOVIE_COLLECTIONS, payload);

const actionGetMovieDetail = payload =>
  createAction(CONST_FETCH_MOVIE_DETAIL, payload);

const actionSetCredentials = payload => {
  createAction(CONST_SET_CREDENTIALS, payload);
};

// async action
export const fetchMovies = () => dispatch => {
  const URL = REACT_NATIVE_GET_MOVIES + '?maNhom=GP01';
  console.log(URL);
  GET(URL)
    .then(response => {
      console.log(response.data);
      dispatch(actionFetchMovieCollection(response.data));
    })
    .catch(error => {
      console.log('failed');
    });
};

// async action
export const fetchMoviesDetails = id => dispatch => {
  const URL = REACT_NATIVE_GET_MOVIE_INFO + `?MaPhim=${id}`;
  GET(URL)
    .then(response => {
      console.log('Success');
      dispatch(actionGetMovieDetail(response.data));
    })
    .catch(error => {
      console.log('failed');
    });
};

export const setCredentials = val => dispatch => {
  dispatch(actionSetCredentials(val));
};
