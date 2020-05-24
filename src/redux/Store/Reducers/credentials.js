import {CONST_SET_CREDENTIALS} from '../../../utils';

const initialState = {
  data: null,
  isLogin: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONST_SET_CREDENTIALS:
      if (action.payload) {
        state.data = JSON.parse(action.payload);
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
      return {...state};
    default:
      return state;
  }
};

export default reducer;
