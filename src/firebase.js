import { initializeApp } from "firebase/app"; // Modular SDK import
import { getFirestore } from "firebase/firestore"; // Modular Firestore import
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Modular Auth import
import { getStorage } from "firebase/storage"; // Modular Storage import

const firebaseConfig = {
  apiKey: "AIzaSyARlwaiZtCjwztvnIEUJM1_fjstARfSqzY",
  authDomain: "disneyplus-clone-49de6.firebaseapp.com",
  projectId: "disneyplus-clone-49de6",
  storageBucket: "disneyplus-clone-49de6.firebasestorage.app",
  messagingSenderId: "1064860778390",
  appId: "1:1064860778390:web:66278e9e86bb8fb34827b7",
  measurementId: "G-QWK1QR70ST"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

// Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Storage
const storage = getStorage(app);

export { auth, provider, storage, signInWithPopup };
export default db;

