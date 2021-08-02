import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDRWhCF6ec92JCFmhfp7Os4B5TtqupWxd0",
  authDomain: "crw-db-11cd8.firebaseapp.com",
  projectId: "crw-db-11cd8",
  storageBucket: "crw-db-11cd8.appspot.com",
  messagingSenderId: "1047336801456",
  appId: "1:1047336801456:web:4e057ce38fce7383dc1775",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {};

export default firebase;
