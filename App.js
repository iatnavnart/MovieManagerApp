/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import MovieAppContainer from './src/navigation';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import RootReducer from './src/redux/Store/Reducers/RootReducer';
import thunk from 'redux-thunk';

const store = createStore(RootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <MovieAppContainer />
    </Provider>
  );
};

export default App;
