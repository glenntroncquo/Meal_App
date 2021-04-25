import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { checkLogin } from '../../utils/login';

export const Loading: React.FC<{ navigation: any }> = ({ navigation }) => {

  useEffect(() => {
    // async function fetchSomeData() {
    //   await SplashScreen.preventAutoHideAsync();

    //   firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //       navigation.replace('BottomNavigator');
    //       SplashScreen.hideAsync();
    //     } else {
    //       navigation.replace('Login');
    //       SplashScreen.hideAsync();
    //     }
    //   });
    // }

    // fetchSomeData();
    SplashScreen.preventAutoHideAsync();
    checkLogin(navigation);
  }, []);

  return (
    <></>
  );
};
