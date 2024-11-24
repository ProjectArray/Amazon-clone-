//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyC4tZnzrGjlumf_QsP-MBpPbEPCFtWD-XA",
//   authDomain: "e-clone-47782.firebaseapp.com",
//   projectId: "e-clone-47782",
//   storageBucket: "e-clone-47782.appspot.com",
//   messagingSenderId: "391237724049",
//   appId: "1:391237724049:web:805a4c7974aa5df61e5c30",
//   measurementId: "G-E01342DG33"
//  };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// export {db,auth };




import {initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4tZnzrGjlumf_QsP-MBpPbEPCFtWD-XA",
  authDomain: "e-clone-47782.firebaseapp.com",
  projectId: "e-clone-47782",
  storageBucket: "e-clone-47782.appspot.com",
  messagingSenderId: "391237724049",
  appId: "1:391237724049:web:805a4c7974aa5df61e5c30",
  measurementId: "G-E01342DG33"
};
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db = getFirestore(app);                //this is our db(database) it will store all of our collection

export {db,auth};



// both auth are the part of the firebase authentication and db is the part of the firebase database both of them is a so much huge firebase 
// services i have to learn firebase services in detail in future .
// for authentication i can see the documentaion on this link given https://firebase.google.com/docs/firestore/quickstart
