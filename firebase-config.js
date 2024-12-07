// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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