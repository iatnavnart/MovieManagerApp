/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import MovieAppContainer from './src/navigation';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import RootReducer from './src/redux/reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <MovieAppContainer />
    </Provider>
  );
};

export default App;
