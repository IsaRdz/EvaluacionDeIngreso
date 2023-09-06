// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVsgZha63k_0IPdFKrohwcvs3lCDFmTdc",
  authDomain: "ev-de-ingreso.firebaseapp.com",
  projectId: "ev-de-ingreso",
  storageBucket: "ev-de-ingreso.appspot.com",
  messagingSenderId: "271916252321",
  appId: "1:271916252321:web:aac22229eac257ab4844e0",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
