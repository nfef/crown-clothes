import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAMI4DmbxFbAIJ6AQfe7tNDk1TQ__RX_U",
    authDomain: "crown-db-bf7e6.firebaseapp.com",
    projectId: "crown-db-bf7e6",
    storageBucket: "crown-db-bf7e6.appspot.com",
    messagingSenderId: "785432075676",
    appId: "1:785432075676:web:e233579959bac3748ffc59"
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;