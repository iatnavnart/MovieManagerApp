import {
  FETCH_MOVIE_COLLECTIONS,
  FETCH_MOVIE_DETAIL,
  SET_CREDENTIALS,
} from './Contants';
import Axios from 'axios';

export const createAction = (type, payload) => ({
  type,
  payload,
});

const actionFetchMovieCollection = payload =>
  createAction(FETCH_MOVIE_COLLECTIONS, payload);

const actionGetMovieDetail = payload =>
  createAction(FETCH_MOVIE_DETAIL, payload);

const actionSetCredentials = payload => {
  createAction(SET_CREDENTIALS, payload);
};

// async action
export const fetchMovies = () => dispatch => {
  Axios({
    url:
      'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
    method: 'GET',
  })
    .then(response => {
      console.log('Success');
      dispatch(actionFetchMovieCollection(response.data));
    })
    .catch(error => {
      console.log('failed');
    });
};

// async action
export const fetchMoviesDetails = id => dispatch => {
  Axios({
    url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: 'GET',
  })
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
