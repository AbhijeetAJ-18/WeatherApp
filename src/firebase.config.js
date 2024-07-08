// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXB7WlpBV7rQ4masuzdgkNvSj-turdZio",
  authDomain: "otp-project-7cc6c.firebaseapp.com",
  projectId: "otp-project-7cc6c",
  storageBucket: "otp-project-7cc6c.appspot.com",
  messagingSenderId: "33257181447",
  appId: "1:33257181447:web:72e615979b927cfda375a2",
  measurementId: "G-7H76ZN7QZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);