import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Loading } from '../screens/loading/Loading';
import { Login } from '../screens/login/Login';
import { BottomNavigator } from './BottomNavigator';

import * as SplashScreen from 'expo-splash-screen';

import firebase from '../utils/firebase';
import { checkLogin } from '../utils/login';

const AuthStack = createStackNavigator();

export const Authentication = () => {

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name='Loading' component={Loading} 
      />
      <AuthStack.Screen name='Login' component={Login} />
      <AuthStack.Screen
        name='BottomNavigator'
        component={BottomNavigator}
      />
    </AuthStack.Navigator>
  );
};
