import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHJ5Jj_PiSoyDAQJkGeiLUN7AerrrB8WY",
  authDomain: "linkedin-clone-bd776.firebaseapp.com",
  projectId: "linkedin-clone-bd776",
  storageBucket: "linkedin-clone-bd776.appspot.com",
  messagingSenderId: "157074867645",
  appId: "1:157074867645:web:f562cdf221008bcba0fed4",
  measurementId: "G-K5XQFM01BJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
export { db, auth, googleProvider, facebookProvider };
