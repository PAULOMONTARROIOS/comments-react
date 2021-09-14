import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyD08WLGxZSXNdw_IxPCPk_hI9mcDmCmnZ8",
  authDomain: "comments-paulo.firebaseapp.com",
  databaseURL: "https://comments-paulo.firebaseio.com",
  projectId: "comments-paulo",
  storageBucket: "comments-paulo.appspot.com",
  messagingSenderId: "210910014975",
  appId: "1:210910014975:web:bdc49b28bb68c8afe14bca",
  measurementId: "G-EPEZ26HPZ9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();


export const database = firebase.database();
