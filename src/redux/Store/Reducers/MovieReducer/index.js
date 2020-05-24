import {CONST_FETCH_MOVIE_COLLECTIONS} from '../../../../utils';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONST_FETCH_MOVIE_COLLECTIONS:
      state = action.payload;
      return [...state];
    default:
      return state;
  }
};

export default reducer;
