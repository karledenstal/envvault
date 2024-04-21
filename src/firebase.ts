import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMANCS_3bEQppBfl4IyPnbtYESrX7XqII",
  authDomain: "envvault-cac06.firebaseapp.com",
  projectId: "envvault-cac06",
  storageBucket: "envvault-cac06.appspot.com",
  messagingSenderId: "53240076781",
  appId: "1:53240076781:web:8b0ebde8968b7f7954afe4",
  measurementId: "G-PK89TXPMHF"
};


// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
