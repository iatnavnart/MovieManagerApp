import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SigninScreen from '../screens/Signin';
import MovieDetailScreen from '../screens/MovieDetail';
import CreateMovieScreen from '../screens/CreateMovie';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
      }}>
      <Tab.Screen
        name="movies"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="movie" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MovieAppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={BottomTabBar}
          options={{headerShown: false}}
        />
        <Stack.Screen name="signin" component={SigninScreen} />
        <Stack.Screen name="detail" component={MovieDetailScreen} />
        <Stack.Screen name="createMovie" component={CreateMovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MovieAppContainer;
