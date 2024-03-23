// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrWbz7ICp0qVOrWLmOdJKSHr071j_E02g",
  authDomain: "e-validation-1e91f.firebaseapp.com",
  databaseURL: "https://e-validation-1e91f-default-rtdb.firebaseio.com",
  projectId: "e-validation-1e91f",
  storageBucket: "e-validation-1e91f.appspot.com",
  messagingSenderId: "639931682073",
  appId: "1:639931682073:web:57449605433004fb7b8988",
  measurementId: "G-515EHYE90N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
