// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBw0aQGJimjfw-_omj2SD6cIzBaH1LxmCQ",
  authDomain: "reactchat-3249b.firebaseapp.com",
  projectId: "reactchat-3249b",
  storageBucket: "reactchat-3249b.appspot.com",
  messagingSenderId: "314176731494",
  appId: "1:314176731494:web:6e44ff7ca6b2b90715b0a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore()
export const storage = getStorage();

