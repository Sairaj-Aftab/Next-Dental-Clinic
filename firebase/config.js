// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBnSjHjovo1tspHkS5ry3deqHPZ7eJtmg",
  authDomain: "dental-clinic-90855.firebaseapp.com",
  projectId: "dental-clinic-90855",
  storageBucket: "dental-clinic-90855.appspot.com",
  messagingSenderId: "842327648534",
  appId: "1:842327648534:web:ee7119098d65cf90624837",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
