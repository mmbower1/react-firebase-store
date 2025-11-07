// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQTrX3DWi6YZAZY7DNdu10dDaKQXVSzag",
  authDomain: "reactfirebase-c8b08.firebaseapp.com",
  projectId: "reactfirebase-c8b08",
  storageBucket: "reactfirebase-c8b08.firebasestorage.app",
  messagingSenderId: "117248753897",
  appId: "1:117248753897:web:f274ce4545b939a4dd7078",
  measurementId: "G-W7PKJ02S06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
