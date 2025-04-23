// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fd541.firebaseapp.com",
  projectId: "mern-estate-fd541",
  storageBucket: "mern-estate-fd541.firebasestorage.app",
  messagingSenderId: "145362631012",
  appId: "1:145362631012:web:1f248622383072a94a2271",
  measurementId: "G-FKPWSJN7HV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);