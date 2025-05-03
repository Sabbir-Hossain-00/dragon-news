// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDixUv9AvWOrHfJnwW91T-PquPXJsLSH0I",
  authDomain: "dragon-news-a6e49.firebaseapp.com",
  projectId: "dragon-news-a6e49",
  storageBucket: "dragon-news-a6e49.firebasestorage.app",
  messagingSenderId: "919452982561",
  appId: "1:919452982561:web:9980a3d6e27afa7a0bf260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);