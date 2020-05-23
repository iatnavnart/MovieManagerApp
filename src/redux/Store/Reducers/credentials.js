import {SET_CREDENTIALS} from '../Actions/Contants';

const initialState = {
  data: null,
  isLogin: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
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
