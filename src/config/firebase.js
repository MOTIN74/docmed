import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC4e3lnxEczb0I522WrAmTR78KrhrGCpl8",
  authDomain: "docmed-1c7f1.firebaseapp.com",
  projectId: "docmed-1c7f1",
  storageBucket: "docmed-1c7f1.appspot.com",
  messagingSenderId: "510215114690",
  appId: "1:510215114690:web:8cc5f756dc25dd7608d05b",
  measurementId: "G-FTMH2Z9GCX"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;