// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATwk1I0XpgS-13uiH4R82jaJMFCSq1oU8",
  authDomain: "el-templo.firebaseapp.com",
  projectId: "el-templo",
  storageBucket: "el-templo.appspot.com",
  messagingSenderId: "988486202338",
  appId: "1:988486202338:web:378e669b4c7353f169ffbb"
};

// Initialize Firebase
export const initializeFirebase = initializeApp(firebaseConfig);