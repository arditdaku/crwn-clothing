import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("yWxhxOUCji6FWNgSdo0z")
  .collection("cartItems")
  .doc("uVF1ndh8C2gx78TmhDJB");
