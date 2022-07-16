// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrpd_RYjAWrAqLWtqFwlNOiuXS_mMECJY",
  authDomain: "salty-fish-studios.firebaseapp.com",
  databaseURL: "https://salty-fish-studios-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "salty-fish-studios",
  storageBucket: "salty-fish-studios.appspot.com",
  messagingSenderId: "184068440205",
  appId: "1:184068440205:web:141dce9e98de5c6e2fe2c4",
  measurementId: "G-CKJE33ZB5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
var email = document.getElementById("mainGUI.username").value;
var pass1 = document.getElementById("mainGUI.password").value;
var pass2 = document.getElementById("mainGUI.confirm").value;
function checkProvided(pass1,pass2){
  if(pass1==pass2){
    
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("SIGNED IN");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
