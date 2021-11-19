import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH1VJJZl8zZ01TN8Sc5rWR-rUGAOjzK0c",
  authDomain: "freelance-cnpm.firebaseapp.com",
  projectId: "freelance-cnpm",
  storageBucket: "freelance-cnpm.appspot.com",
  messagingSenderId: "619153882709",
  appId: "1:619153882709:web:6688bc04eedf73d5ac1edc",
  measurementId: "G-9L3LZJ1VZS",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
