import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2KRhOs_v4_3nORmcUBp-01qQGqF4UKgk",
  authDomain: "tienda-2318d.firebaseapp.com",
  projectId: "tienda-2318d",
  storageBucket: "tienda-2318d.appspot.com",
  messagingSenderId: "981371472604",
  appId: "1:981371472604:web:beb1b1b4d592c8e694c219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
