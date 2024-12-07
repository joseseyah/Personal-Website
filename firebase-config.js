// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdig0-WETDcFpIGAFOj8hSlxuZ8vqlAhw",
    authDomain: "webpage-94f68.firebaseapp.com",
    projectId: "webpage-94f68",
    storageBucket: "webpage-94f68.appspot.com",
    messagingSenderId: "936342004476",
    appId: "1:936342004476:web:fd5fb146fc4a1353006d79",
    measurementId: "G-HQCTDJMLCG",
  };
  
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

// Debugging to verify Firebase services
console.log("Firebase initialized:", app);
console.log("Firestore instance:", db);
console.log("Storage instance:", storage);
console.log("Auth instance:", auth);
  