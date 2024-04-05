import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyABIJ3ITUrYLIixY43xu07PM7ZCBgnz2Ww',
  authDomain: 'chat-web-app-df8a3.firebaseapp.com',
  projectId: 'chat-web-app-df8a3',
  storageBucket: 'chat-web-app-df8a3.appspot.com',
  messagingSenderId: '907805806187',
  appId: '1:907805806187:web:6b90d3d176a43151326b2e',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();

