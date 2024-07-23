import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9p1zOuXNL9WxPmBFa6O_mrm1aXl2MuN8",
  authDomain: "mern-7ef0b.firebaseapp.com",
  projectId: "mern-7ef0b",
  storageBucket: "mern-7ef0b.appspot.com",
  messagingSenderId: "976089817822",
  appId: "1:976089817822:web:f692762ea7713c3dcf584f",
  measurementId: "G-5LS7NPQBV8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
