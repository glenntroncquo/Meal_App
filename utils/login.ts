import firebase from './firebase';
import 'firebase/database';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { week } from './week';

export const checkLogin: Function = async (navigation: any) => {
  await SplashScreen.preventAutoHideAsync();

  const setAsyncStorage: Function = async (data: []) => {
    await AsyncStorage.setItem('calendar', JSON.stringify(data));
    navigation.replace('BottomNavigator');
  };

  const setDb: Function = async (id: string) => {
    await firebase
      .database()
      .ref('/user/' + id)
      .set({
        week: week,
      });
    await AsyncStorage.setItem('calendar', JSON.stringify(week));
  };

  const getDb: Function = async (id: string) => {
    const ref = firebase.database().ref('/user/' + id + '/week');

    const data = ref.on('value', (snapshot) => {
      if (snapshot.exists()) {
        setAsyncStorage(snapshot);
      } else {
        setDb(id);
      }
      ref.off();
    });
  };

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      getDb(user.uid);

      SplashScreen.hideAsync();
    } else {
      navigation.replace('LoginNavigator');
      SplashScreen.hideAsync();
    }
  });
};
