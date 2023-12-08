import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyA0bgR-oCKup98UvaRnAZc45k-x4I6ysqE",
  authDomain: "chatty-4561a.firebaseapp.com",
  projectId: "chatty-4561a",
  storageBucket: "chatty-4561a.appspot.com",
  messagingSenderId: "992067715908",
  appId: "1:992067715908:web:54a4573a9b1f7dd07d0d11",
  measurementId: "G-XV0N0Y08M9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage();


