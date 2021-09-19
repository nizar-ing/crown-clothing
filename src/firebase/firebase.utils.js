import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBRWTrVLVA-Hj43BoavB4l-YFzI7ZeZvO0",
  authDomain: "crown-clothing-58ae4.firebaseapp.com",
  projectId: "crown-clothing-58ae4",
  storageBucket: "crown-clothing-58ae4.appspot.com",
  messagingSenderId: "219218445997",
  appId: "1:219218445997:web:6ff0ab49ce1845d0fae824",
  measurementId: "G-7WNF7592QY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
