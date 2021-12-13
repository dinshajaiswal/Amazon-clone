import firebase from "firebase";
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDL0vuzyFGH5cI4C2zl9UrwUsqx95NAasE",
    authDomain: "clone-app-29cb8.firebaseapp.com",
    projectId: "clone-app-29cb8",
    storageBucket: "clone-app-29cb8.appspot.com",
    messagingSenderId: "190228645412",
    appId: "1:190228645412:web:d50f89013fae04791fbab1",
    measurementId: "G-N0ZEMXM7DM"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};