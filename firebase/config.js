import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAoLOFMBq1LJ40rpf0h8UT3z6maeT_0T7s",
  authDomain: "spotify-d5932.firebaseapp.com",
  projectId: "spotify-d5932",
  storageBucket: "spotify-d5932.appspot.com",
  messagingSenderId: "912459157484",
  appId: "1:912459157484:web:be5bdda200c927144b3ac9",
  measurementId: "G-B9J594V6RD"
};

const firebase = Firebase.initializeApp(firebaseConfig);


export  {firebase};