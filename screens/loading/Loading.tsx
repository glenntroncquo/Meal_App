import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { checkLogin } from '../../utils/login';

export const Loading: React.FC<{ navigation: any }> = ({ navigation }) => {

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    checkLogin(navigation);
  }, []);

  return (
    <></>
  );
};
