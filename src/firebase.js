// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from 'firebase/analytics';
// import { firestore } from "firebase/firestore";
//import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDzDXB55MTifusO2VD38p_8aODw5dCeUnY',
  authDomain: 'todo-app-fdfdf.firebaseapp.com',
  projectId: 'todo-app-fdfdf',
  storageBucket: 'todo-app-fdfdf.appspot.com',
  messagingSenderId: '68221206166',
  appId: '1:68221206166:web:fcb4729b42ed2370be0cb7',
  measurementId: 'G-TFZ1NY301Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//const db = firebase.firestore();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
