import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './utils/firebase';

import { Authentication } from './navigation/Authentication';
import { BottomNavigator } from './navigation/BottomNavigator';
import { checkLogin } from './utils/login';

export default ()  => {
  const[loggedIn, setLoggedIn] = useState(false);

  const[screen, setScreen] = useState(<Authentication/>);

  const checkIsLoggedIn = async () => {
    await checkLogin();
  }

  useEffect(() => {

    checkIsLoggedIn();

  }, []);

  useEffect(() => {

  }, [loggedIn])

 

  return (
    <NavigationContainer>
      {/* {loggedIn ? <BottomNavigator /> : <Authentication />} */}
      {/* <Authentication/> */}

      {screen}
    </NavigationContainer>
  );
};
