// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc } from "@firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const firestore = getFirestore(app);

// adds user to firebase db
export const createUserDoc = async (userAuth) => {
  const userDocRef = doc(firestore, "users", userAuth.uid);
  // console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  // false
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user!", error.message);
    }
  }
  // true
  return userDocRef;
};

// Initialize google auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
