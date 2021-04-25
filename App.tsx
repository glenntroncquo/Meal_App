import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './utils/firebase';

import { Authentication } from './navigation/Authentication';
import { BottomNavigator } from './navigation/BottomNavigator';
import { checkLogin } from './utils/login';

export default ()  => {


  return (
    <NavigationContainer>
      <Authentication />
      {/* <BottomNavigator/> */}
    </NavigationContainer>
  );
};
