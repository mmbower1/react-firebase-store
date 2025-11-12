// Import the functions you need from the SDKs you need
// import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc } from "@firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
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

// adds a user to firebase db via google auth
export const createUserDoc = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
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
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error creating the user!", error.message);
    }
  }
  // true
  return userDocRef;
};

export const auth = getAuth();

// create a user with any normal email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// sign in existing account with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// Initialize google auth
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const googlePopupSignIn = () => {
  signInWithPopup(auth, googleProvider);
};
// export const googleRedirectSignIn = () =>
//   signInWithRedirect(auth, googleProvider);
