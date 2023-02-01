import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB1Mhn4Rv-uJR9W_jYFdnd_Hv2QH0Rwnqg",
  authDomain: "chat-app-51af0.firebaseapp.com",
  projectId: "chat-app-51af0",
  storageBucket: "chat-app-51af0.appspot.com",
  messagingSenderId: "672150227020",
  appId: "1:672150227020:web:0945d2474a4808824d4ce9",
  measurementId: "G-PR84B4EQ9T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export const storage = getStorage(app, "gs://chat-app-51af0.appspot.com/");
export const db = getFirestore(app);
