// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH1VJJZl8zZ01TN8Sc5rWR-rUGAOjzK0c",
  authDomain: "freelance-cnpm.firebaseapp.com",
  projectId: "freelance-cnpm",
  storageBucket: "freelance-cnpm.appspot.com",
  messagingSenderId: "619153882709",
  appId: "1:619153882709:web:6688bc04eedf73d5ac1edc",
  measurementId: "G-9L3LZJ1VZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db, app };


