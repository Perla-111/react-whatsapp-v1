import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC3PpKJY_nRE6ejFa9Xo0t7lne549UHQfc",
    authDomain: "whatsapp-v1-3e265.firebaseapp.com",
    projectId: "whatsapp-v1-3e265",
    storageBucket: "whatsapp-v1-3e265.appspot.com",
    messagingSenderId: "509276297784",
    appId: "1:509276297784:web:57e1fa7e1c62a648a724cd"
  };

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();