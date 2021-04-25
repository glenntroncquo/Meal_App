import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Loading } from '../screens/loading/Loading';
import { Login } from '../screens/login/Login';
import { BottomNavigator } from './BottomNavigator';

const AuthStack = createStackNavigator();

export const Authentication = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      
      }
    }
    >
      <AuthStack.Screen name='Loading' component={Loading} 
      />
      <AuthStack.Screen name='BottomNavigator' component={BottomNavigator} />
      <AuthStack.Screen name='Login' component={Login} />
    </AuthStack.Navigator>
  );
};
