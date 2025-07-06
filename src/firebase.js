import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyCm09HzSWE5skKeIro9dHKNwVvXme832Dg",
  authDomain: "ecommercestored.firebaseapp.com",
  projectId: "ecommercestored",
  storageBucket: "ecommercestored.firebasestorage.app",
  messagingSenderId: "894195991403",
  appId: "1:894195991403:web:0dd57e3334bda934a6822e",
  measurementId: "G-RPYD5D9PP4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);