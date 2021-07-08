import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBdoTPXPFC5YOKeySVvVVq5kJNlzR6Q3Aw",
  authDomain: "ecommerce-15903.firebaseapp.com",
  projectId: "ecommerce-15903",
  storageBucket: "ecommerce-15903.appspot.com",
  messagingSenderId: "749157246086",
  appId: "1:749157246086:web:ca1ddb4d48f2ff60295d07",
  measurementId: "G-62116C22TC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exits) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google sign-in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;