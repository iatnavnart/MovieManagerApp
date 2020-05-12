import {FETCH_MOVIE_COLLECTIONS} from '../../Actions/Contants';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_COLLECTIONS:
      state = action.payload;
      return [...state];
    default:
      return state;
  }
};

export default reducer;
