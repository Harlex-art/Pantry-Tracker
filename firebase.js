// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFUmuiJ8E-nEqBVIoz0YHz30aR2aTQTKY",
  authDomain: "inventory-management-27487.firebaseapp.com",
  projectId: "inventory-management-27487",
  storageBucket: "inventory-management-27487.appspot.com",
  messagingSenderId: "338077193715",
  appId: "1:338077193715:web:045daedd149f01eb80ae86",
  measurementId: "G-JNJZBCK8S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}