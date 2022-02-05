
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
      addUser:async (u) => {
        await db.collection('Users').doc(u.id).set({
          name: u.name,
          image: u.image
        }, {merge:true});
      },
      getContactlist: async(userId) => {
        let list = [];
        let results = await db.collection('Users').get();
        results.forEach(result => {
          let data = result.data()

          if(result.id !== userId) {
            list.push({
              id: result.id,
              name: data.name,
              image: data.image
            });
          }

        });

        return list;

      },
      addNovoChat:async (user, user2) => {
        
      }
}

 