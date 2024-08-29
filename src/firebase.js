import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAqBuil7qmBBKSWy_iVMWtlXs5bJX1O6S0",
  authDomain: "chatapp-9c89b.firebaseapp.com",
  projectId: "chatapp-9c89b",
  storageBucket: "chatapp-9c89b.appspot.com",
  messagingSenderId: "1073068367991",
  appId: "1:1073068367991:web:8544712e039cba1385a672",
  measurementId: "G-6S2FYCQ4Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()