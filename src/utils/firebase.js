// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkBd_N0BTe298zCQItOuQY8jVMxo_2gNg",
  authDomain: "netflixgpt2-a6849.firebaseapp.com",
  projectId: "netflixgpt2-a6849",
  storageBucket: "netflixgpt2-a6849.firebasestorage.app",
  messagingSenderId: "196769391959",
  appId: "1:196769391959:web:4d1ededbe821df66be8a12",
  measurementId: "G-6VX07ET0VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()