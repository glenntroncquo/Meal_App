import firebase from './firebase';
import * as SplashScreen from 'expo-splash-screen';

export const checkLogin: Function = async (navigation: any) => {
  await SplashScreen.preventAutoHideAsync();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      navigation.replace('BottomNavigator');
      SplashScreen.hideAsync();
    } else {
      navigation.navigate('Login');
      SplashScreen.hideAsync();
    }
  });
};
