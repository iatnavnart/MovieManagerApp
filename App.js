/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import MovieAppContainer from './src/navigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import RootReducer from './src/redux/Store/Reducers/RootReducer';

const store = createStore(RootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <MovieAppContainer />
    </Provider>
  );
};

export default App;
