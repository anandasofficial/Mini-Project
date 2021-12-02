import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
  apiKey: "AIzaSyDTcTMlGXrGoU9EXfHWjWOpjUFSjkGXLF4",
  authDomain: "fastfix-reactjs.firebaseapp.com",
  projectId: "fastfix-reactjs",
  storageBucket: "fastfix-reactjs.appspot.com",
  messagingSenderId: "527426482497",
  appId: "1:527426482497:web:0b39ac9cfb19e148b7b1c0"});
var db = firebaseApp.firestore();

export { db };