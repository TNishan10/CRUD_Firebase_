// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tutorial-b8420.firebaseapp.com",
  projectId: "tutorial-b8420",
  storageBucket: "tutorial-b8420.appspot.com",
  messagingSenderId: "48286424721",
  appId: "1:48286424721:web:8a773f37364d16d401e930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth();
export default app;

