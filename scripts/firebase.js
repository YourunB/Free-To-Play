const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyApnntzWJlDqoZm9PJp-zDYHwtQtjM4xcE",
  authDomain: "ftp1-study.firebaseapp.com",
  databaseURL: "https://ftp1-study-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ftp1-study",
  storageBucket: "ftp1-study.appspot.com",
  messagingSenderId: "417994014326",
  appId: "1:417994014326:web:5d6244d2173c1371eda957"
});

const myAppDB = firebaseApp.database();
const auth = firebaseApp.auth();

const db = myAppDB;
const msgRef = db.ref("/msgs");
