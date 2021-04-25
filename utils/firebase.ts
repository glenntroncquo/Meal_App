import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBogvD0YY2qygwXHDNqTCAHCGK7I-h8b94',
  authDomain: 'meal-app-91bb3.firebaseapp.com',
  projectId: 'meal-app-91bb3',
  storageBucket: 'meal-app-91bb3.appspot.com',
  messagingSenderId: '896084811195',
  appId: '1:896084811195:web:68f2553906880656ca789e',
  measurementId: 'G-V69JGDGH5Y',
};


firebase.initializeApp(firebaseConfig);

export default firebase;