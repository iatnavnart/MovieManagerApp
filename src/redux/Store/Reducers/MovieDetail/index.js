import {CONST_FETCH_MOVIE_DETAIL} from '../../../../utils';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONST_FETCH_MOVIE_DETAIL:
      state = action.payload;
      return [...state];
    default:
      return state;
  }
};

export default reducer;
