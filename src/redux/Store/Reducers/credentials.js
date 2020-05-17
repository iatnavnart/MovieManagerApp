import {SET_CREDENTIALS} from '../Actions/Contants';
import {AsyncStorage} from 'react-native';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      state = action.payload;
      return [...state];
    default:
      return state;
  }
};

export default reducer;
