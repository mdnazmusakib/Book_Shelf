// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2hXxp9Ygmwx4WYX75TmMhLrxtdC9tcbY",
  authDomain: "authentication-4686b.firebaseapp.com",
  projectId: "authentication-4686b",
  storageBucket: "authentication-4686b.firebasestorage.app",
  messagingSenderId: "645164393707",
  appId: "1:645164393707:web:dfb36541ebd58447e04aae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
