import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB7wqOIWdkVQOqlfmqfIxrC5S81xD1PzAg",
    authDomain: "react-portfolio-8792b.firebaseapp.com",
    projectId: "react-portfolio-8792b",
    storageBucket: "react-portfolio-8792b.appspot.com",
    messagingSenderId: "855813876164",
    appId: "1:855813876164:web:633452c0ace0f16e165c91",
    measurementId: "G-J12GX7XRXM"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { app, db };