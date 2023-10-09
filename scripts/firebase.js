const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKnOmwvpLV65vRQuVg3jZSvuKGygBcP7c",
  authDomain: "free-to-play-study-work.firebaseapp.com",
  databaseURL: "https://free-to-play-study-work-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "free-to-play-study-work",
  storageBucket: "free-to-play-study-work.appspot.com",
  messagingSenderId: "45059650572",
  appId: "1:45059650572:web:854a1245408257b08b2a29"
});

const myAppDB = firebaseApp.database();
const auth = firebaseApp.auth();

const db = myAppDB;
const msgRef = db.ref("/msgs");
