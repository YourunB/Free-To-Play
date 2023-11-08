const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqFFJxaXXNquKy1chjyVCBffxtQ9MNhXg",
  authDomain: "free-to-play-73b9d.firebaseapp.com",
  databaseURL: "https://free-to-play-73b9d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "free-to-play-73b9d",
  storageBucket: "free-to-play-73b9d.appspot.com",
  messagingSenderId: "678287052346",
  appId: "1:678287052346:web:ac7a9d0ece34ceb659af03"
});

const myAppDB = firebaseApp.database();
const auth = firebaseApp.auth();

const db = myAppDB;
const msgRef = db.ref("/msgs");
