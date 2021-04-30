import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBogvD0YY2qygwXHDNqTCAHCGK7I-h8b94',
  authDomain: 'meal-app-91bb3.firebaseapp.com',
  projectId: 'meal-app-91bb3',
  storageBucket: 'meal-app-91bb3.appspot.com',
  messagingSenderId: '896084811195',
  appId: '1:896084811195:web:68f2553906880656ca789e',
  measurementId: 'G-V69JGDGH5Y',
  
  databaseURL: "https://meal-app-91bb3-default-rtdb.europe-west1.firebasedatabase.app/"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
