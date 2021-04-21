import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BottomNavigator } from './navigation/BottomNavigator';
import { Loading } from './screens/loading/Loading';
import { Login } from './screens/login/Login';


const AppNavigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <BottomNavigator/> */}

      <AppNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppNavigator.Screen name='Login' component={Login} />
        <AppNavigator.Screen name='Loading' component={Loading} />
        <AppNavigator.Screen
          name='BottomNavigator'
          component={BottomNavigator}
        />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}
