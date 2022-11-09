import { initializeApp } from "firebase/app";

//firebase setup
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY4kr5EGSj6VLD_zurFVBj8IceNWq1jcY",
  authDomain: "react-netflix-clone-3ff28.firebaseapp.com",
  projectId: "react-netflix-clone-3ff28",
  storageBucket: "react-netflix-clone-3ff28.appspot.com",
  messagingSenderId: "352018029091",
  appId: "1:352018029091:web:027ceccd18d2357f932f96",
  measurementId: "G-Q1TBLY6G0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase setup 
export const firebaseAuth = getAuth(app); 
