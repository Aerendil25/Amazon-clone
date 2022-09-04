// import { firebase } from "firebase";
// // import * as firebase from 'firebase/app'

// const firebaseApp = firebase.initializeApp ({
//   apiKey: "AIzaSyDLgPMHilAh1LoSNJ2Bygi2DsKDeCYd8Jk",
//   authDomain: "clone-abf4f.firebaseapp.com",
//   projectId: "clone-abf4f",
//   storageBucket: "clone-abf4f.appspot.com",
//   messagingSenderId: "398868586883",
//   appId: "1:398868586883:web:58bd4913dea43a556dd6b6",
//   measurementId: "G-FE0L0L095Q",
// });

// const auth = firebaseApp;

// export {auth} ;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLgPMHilAh1LoSNJ2Bygi2DsKDeCYd8Jk",
  authDomain: "clone-abf4f.firebaseapp.com",
  projectId: "clone-abf4f",
  storageBucket: "clone-abf4f.appspot.com",
  messagingSenderId: "398868586883",
  appId: "1:398868586883:web:58bd4913dea43a556dd6b6",
  measurementId: "G-FE0L0L095Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);