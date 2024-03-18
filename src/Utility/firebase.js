import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9ydx47OChQAi9NnF7hb1UwLuTcdJIXOw",
  authDomain: "clone-80875.firebaseapp.com",
  projectId: "clone-80875",
  storageBucket: "clone-80875.appspot.com",
  messagingSenderId: "390044983902",
  appId: "1:390044983902:web:5389b005758309b5244acf",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();