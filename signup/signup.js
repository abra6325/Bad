  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAFCOkUHV1ZRv5ORiU3sn5XmGsOtjEfUx8",
    authDomain: "accountdata-ae6f3.firebaseapp.com",
    projectId: "accountdata-ae6f3",
    storageBucket: "accountdata-ae6f3.appspot.com",
    messagingSenderId: "440835452205",
    appId: "1:440835452205:web:902d990fcaef34d27977a4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = firebase.auth()