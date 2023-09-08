// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBklD5Rx-A5x4kEiW_ivvc6RpfXcL2QPok",
  authDomain: "collaborative-task-manag-cbf61.firebaseapp.com",
  projectId: "collaborative-task-manag-cbf61",
  storageBucket: "collaborative-task-manag-cbf61.appspot.com",
  messagingSenderId: "980330212125",
  appId: "1:980330212125:web:f720332956115812c10ff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;