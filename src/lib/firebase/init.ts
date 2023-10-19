// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD33Gv7OKRtw6JzxG7Hf0AeafsH5WPp4zU",
  authDomain: "gurielamp-app.firebaseapp.com",
  projectId: "gurielamp-app",
  storageBucket: "gurielamp-app.appspot.com",
  messagingSenderId: "475413967734",
  appId: "1:475413967734:web:d824c954f2408216a48057"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app