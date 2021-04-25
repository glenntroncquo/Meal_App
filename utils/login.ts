import React from 'react';

import firebase from './firebase';
import * as SplashScreen from 'expo-splash-screen';
import { Authentication } from '../navigation/Authentication';
import { BottomNavigator } from '../navigation/BottomNavigator';

export const checkLogin: Function = async () => {
  await SplashScreen.preventAutoHideAsync();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        
      return true;
    } else {
      return false;
    }
  });
};
