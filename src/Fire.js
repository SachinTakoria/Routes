import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
const firebaseConfig = {
    apiKey: "AIzaSyCc0I-BGvTjNvqXVkQL9j2-qNnjbVqd7Pk",
    authDomain: "takoria-e38a0.firebaseapp.com",
    databaseURL: "https://takoria-e38a0-default-rtdb.firebaseio.com",
    projectId: "takoria-e38a0",
    storageBucket: "takoria-e38a0.appspot.com",
    messagingSenderId: "471597936837",
    appId: "1:471597936837:web:d33522e897a648c28ac0ac"
  };
  const fireireDb = firebase.initializeApp(firebaseConfig)
  let Fire= fireireDb.database().ref();


export default Fire