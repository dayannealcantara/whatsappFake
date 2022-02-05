
import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from "./firebaseConfig"

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fbPopup:async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebaseApp.auth().signInWithPopup(provider);    
        return result;
      },
}

 