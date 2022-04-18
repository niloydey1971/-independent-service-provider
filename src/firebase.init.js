// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0LPCpJqhUpAnvYYHk7lzCj8wDNdJUn84",
  authDomain: "sporphy10.firebaseapp.com",
  projectId: "sporphy10",
  storageBucket: "sporphy10.appspot.com",
  messagingSenderId: "306066220488",
  appId: "1:306066220488:web:8dfeb17ada8b0eb20e0cfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;