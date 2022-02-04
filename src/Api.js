import firebase from 'firebase/firebase-app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import firebaseConfig from './firebaseConfig'; 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();




