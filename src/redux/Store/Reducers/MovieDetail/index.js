import {FETCH_MOVIE_DETAIL} from '../../Actions/Contants';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAIL:
      state = action.payload;
      return [...state];
    default:
      return state;
  }
};

export default reducer;
