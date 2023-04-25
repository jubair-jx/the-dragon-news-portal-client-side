// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzy9fSRKgO61tFXp9YF9TCpUfxK-UDCiI",
  authDomain: "the-dragon-news-auth.firebaseapp.com",
  projectId: "the-dragon-news-auth",
  storageBucket: "the-dragon-news-auth.appspot.com",
  messagingSenderId: "335238297558",
  appId: "1:335238297558:web:76237af7f189140cba9677",
  measurementId: "G-30YD7WF6S1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
