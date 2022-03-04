import firebase from "firebase";
import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
import "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDq3XWkjA1mj29eeIVRahFxRjXfs78rGLs",
  authDomain: "twitter-clone-9b108.firebaseapp.com",
  projectId: "twitter-clone-9b108",
  storageBucket: "twitter-clone-9b108.appspot.com",
  messagingSenderId: "865453564647",
  appId: "1:865453564647:web:67f0459ed5dba893957842",
  measurementId: "G-BJQBKSWS6W",
};

const App = initializeApp(firebaseConfig);
export const db = App.firestore();
export const auth = firebase.auth();
