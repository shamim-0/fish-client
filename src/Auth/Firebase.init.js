import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfo_kD3hKrc3Zul03EKd1yWKmzo-F-ec8",
  authDomain: "go-fish-b98d0.firebaseapp.com",
  projectId: "go-fish-b98d0",
  storageBucket: "go-fish-b98d0.appspot.com",
  messagingSenderId: "267972849797",
  appId: "1:267972849797:web:e7c359f3a9dd13769a39ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app)
export default auth ;

