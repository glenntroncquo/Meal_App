import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Explore from '../screens/explore/Explore';
import Home from '../screens/home/Home';
import MealDetails from '../screens/home/MealDetails';
import Favorite from '../screens/favorites/Favorite';
import Profile from '../screens/profile/Profile';

import colors from '../styles/colors';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: 'white',
      //     shadowOpacity: 0,
      //     elevation: 0,
      //   },
      //   headerTitleStyle: {
      //     fontSize: 30,
      //     paddingTop: 18,
      //   },
      //   cardStyle: { backgroundColor: '#fff' },
      // }}
      screenOptions={{
        headerShown: false,
        
      }}
    >
      <Stack.Screen name='Home' component={Home}
      />
      <Stack.Screen name='MealDetails' component={MealDetails} />
    </Stack.Navigator>
  );
};

export const FavoriteNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTitleStyle: {
          fontSize: 30,
          paddingTop: 18,
        },
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name='Favorites' component={Favorite} />
    </Stack.Navigator>
  );
};

export const ExploreNavigator: React.FC<{ navigation: any, route: any }> = ({navigation}) => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTitleStyle: {
          fontSize: 30,
          paddingTop: 18,
        },
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name='Explore' component={Explore} />
      <Stack.Screen name='MealDetail' component={MealDetails} />
    </Stack.Navigator>
  );
};

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTitleStyle: {
          fontSize: 30,
          paddingTop: 18,
        },
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='not' component={MealDetails} />
    </Stack.Navigator>
  );
};
