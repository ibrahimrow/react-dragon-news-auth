// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3M4ahKyUdK_T3KuUDknQ57QoelUxgJto",
  authDomain: "react-dragon-news-auth-42fca.firebaseapp.com",
  projectId: "react-dragon-news-auth-42fca",
  storageBucket: "react-dragon-news-auth-42fca.appspot.com",
  messagingSenderId: "4949967996",
  appId: "1:4949967996:web:02a255febebb94fabc35f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;