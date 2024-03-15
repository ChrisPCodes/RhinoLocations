// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7R2lHGgoT8wclJoxXyj8HhIWm7PIgMNI",
  authDomain: "rhino-locations.firebaseapp.com",
  projectId: "rhino-locations",
  storageBucket: "rhino-locations.appspot.com",
  messagingSenderId: "349014753812",
  appId: "1:349014753812:web:4610b6534c20c7757e1d01",
  measurementId: "G-0JY8TZXQVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {auth, db }; // Exporting for use in other scripts if needed