// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-f6y7_h3ur-DoSMB4Pwkl2YE8cN1Q9iA",
  authDomain: "feed-react-6e520.firebaseapp.com",
  projectId: "feed-react-6e520",
  storageBucket: "feed-react-6e520.appspot.com",
  messagingSenderId: "263945363115",
  appId: "1:263945363115:web:68e9c6a40e46a36293a1ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };