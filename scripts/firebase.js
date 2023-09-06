const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXAajZcrAGWuqpc_hUALK6CRwQ7C2fO_c",
  authDomain: "free-to-play-game.firebaseapp.com",
  databaseURL: "https://free-to-play-game-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "free-to-play-game",
  storageBucket: "free-to-play-game.appspot.com",
  messagingSenderId: "44473326669",
  appId: "1:44473326669:web:58f27a95b4f7bd39539004"
});

const myAppDB = firebaseApp.database();
const auth = firebaseApp.auth();

const db = myAppDB;
const msgRef = db.ref("/msgs");

//const provider = new firebase.auth.GoogleAuthProvider();

