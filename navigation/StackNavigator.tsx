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
import { Login } from '../screens/login/Login';
import { SignUp } from '../screens/login/SignUp';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
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
      <Stack.Screen
        name='Hello {glenn},'
        component={Home}
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                size={28}
                name='search'
                color={colors.darkGreen}
                style={{ margin: 16, marginTop: 40 }}
              />
            </TouchableOpacity>
          ),
        }}
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

export const ExploreNavigator: React.FC<{ navigation: any; route: any }> = ({
  navigation,
}) => {
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
          paddingBottom:0
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

export const LoginNavigator = () => {
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
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Sign up' component={SignUp} />
    </Stack.Navigator>
  );
};
