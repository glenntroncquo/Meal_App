import React, { useEffect, useState } from 'react';
import { View, Text, } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import firebase from '../../utils/firebase';
import { checkLogin } from '../../utils/login';

export const Loading: React.FC<{navigation: any}> = ({navigation}) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const[fetchData, setFetchData] = useState([]);


  useEffect(() => {
    async function fetchSomeData() {
      await SplashScreen.preventAutoHideAsync();
    
      firebase.auth().onAuthStateChanged(user => {
        if(user)
        {
          navigation.replace('BottomNavigator');
          SplashScreen.hideAsync();
        }
        else
        {
          navigation.replace('Login');
          SplashScreen.hideAsync();
        }

      });

    };

    fetchSomeData();
  }, []);

  return (
    <View
    style={{flex: 1, alignItems: 'center', marginTop: 120}}
    >
    </View>

  );
};
