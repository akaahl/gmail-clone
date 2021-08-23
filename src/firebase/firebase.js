import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGuAWpw6wOozHvj-Fah6oiSu6tB_Wsci0",
  authDomain: "clone-fbd0a.firebaseapp.com",
  projectId: "clone-fbd0a",
  storageBucket: "clone-fbd0a.appspot.com",
  messagingSenderId: "797386103798",
  appId: "1:797386103798:web:171c99383a8a1f404085d7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
