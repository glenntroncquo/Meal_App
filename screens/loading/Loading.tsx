import React, { useEffect, useState } from 'react';
import { View, Text, } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import firebase from '../../utils/firebase';

export const Loading: React.FC<{navigation: any}> = ({navigation}) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const[fetchData, setFetchData] = useState([]);


  useEffect(() => {
    async function fetchSomeData() {
      await SplashScreen.preventAutoHideAsync();
      // fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=c733a037b0ae47f68107283fcd6c6715&query=pasta')
      // .then(response => response.json())
      // .then(json => setFetchData(json))

      firebase.auth().onAuthStateChanged(user => {
        if(user)
        {
          console.log('hello')
          
        }
        else
        {
          navigation.navigate('BottomNavigator');
          SplashScreen.hideAsync();
        }

      });

    };

    fetchSomeData();
    // SplashScreen.hideAsync();
  }, []);

  const onDataLoaded = async () => {
    
  }

  return (
    <View
    // onLayout={onDataLoaded}
    style={{flex: 1, alignItems: 'center', marginTop: 120}}
    >
      <Text>
        hello loading page
       
      </Text>

    </View>

  );
};
