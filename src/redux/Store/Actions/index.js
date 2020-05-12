import {FETCH_MOVIE_COLLECTIONS} from './Contants';

export const createAction = (type, payload) => ({
  type,
  payload,
});

export const actionFetchMovieCollection = payload =>
  createAction(FETCH_MOVIE_COLLECTIONS, payload);
