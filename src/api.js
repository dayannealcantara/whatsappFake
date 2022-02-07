
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
        let novoChat = await db.collection('chats').add({
          messages:[],
          Users:[user.id, user2.id]
        });
        db.collection('Users').doc(user.id).update({
          chats: firebase.firestore.FieldValue.arrayUnion({
            chatId: novoChat.id,
            title:user2.name,
            image:user2.image,
            width:user2.id
          })
        });
        db.collection('Users').doc(user2.id).update({
          chats: firebase.firestore.FieldValue.arrayUnion({
            chatId: novoChat.id,
            title:user.name,
            image:user.image,
            width:user.id
          })
      });
    },
    onChatList:(userId, setChatList) => {
      return db.collection('Users').doc(userId).onSnapshot((doc)=> {
       if(doc.exists) {
        let data = doc.data();
         if(data.chats) {
           let chats = [...data.chats]
          
          chats.sort((a, b) => {
            if(a.lastMessageDate === undefined) {
              return -1;
            }
            if(b.lastMessageDate === undefined) {
              return -1;
            }
            if(a.lastMessageDate.seconds < b.lastMessageDate.seconds) {
              return 1;
            } else {
              return -1;
            }
          });           
         setChatList(chats);
        }
      }
    });
  },
    onChatContent:(chatId, setList, setUsers) => {
      return db.collection('chats').doc(chatId).onSnapshot((doc)=> {
       if(doc.exists) {
      let data = doc.data();      
      setList(data.messages);
      setUsers(data.users);      
    }
  });
},
 sendMessage: async(chatData, userId, type, body, users) => {
   let now = new Date();
   db.collection('chats').doc(chatData.chatId).update({
     messages: firebase.firestore.FieldValue.arrayUnion({
       type,
       author:userId,
       body,
       date: now
     })
   });

   for(let i in users) {
     let u = await db.collection('Users').doc(users[i]).get();
     let uData= u.data();
     if(uData.chats) {
       let chats =[...uData.chats];

       for(let e in chats){
         if(chats[e].chatId === chatData.chatId){
           chats[e].lastMessage = body;
           chats[e].lastMessageDate = now;

         }
       }

       await db.collection('Users').doc(users[i]).update({
         chats
       })
     }
   }
 }
};

 