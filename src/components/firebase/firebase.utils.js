import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBB8TaOr_1w0beVZaMKq6dbE-hLzvkOsfk",
    authDomain: "clothing-store-4eeae.firebaseapp.com",
    databaseURL: "https://clothing-store-4eeae.firebaseio.com",
    projectId: "clothing-store-4eeae",
    storageBucket: "clothing-store-4eeae.appspot.com",
    messagingSenderId: "536653933763",
    appId: "1:536653933763:web:79d8f360b6e1da55ba4676",
    measurementId: "G-W0LDW5H97X"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

     const userRef = firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get();

     if(!snapShot.exists) {
       const { displayName, email } = userAuth;
       const createdAt = new Date();

       try {
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         })
       } catch(error) {
         console.log('error creating user', error.message); 
       }
     }

     return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;