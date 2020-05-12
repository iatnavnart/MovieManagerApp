import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignInScreen from '../components/SignIn';
import MovieDetailScreen from '../components/MovieDetail';
import AddMovieScreen from '../components/AddMovie';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
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
          tabBarIcon: ({color, size}) => (
            <Icon name="movie" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="face" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MovieAppContainer = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={BottomTabBar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signin"
        component={SignInScreen}
        options={{title: 'SignIn Screen'}}
      />
      <Stack.Screen
        name="detail"
        component={MovieDetailScreen}
        options={{title: 'Movie Detail'}}
      />
      <Stack.Screen
        name="addmovie"
        component={AddMovieScreen}
        options={{title: 'Add Movie'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MovieAppContainer;
