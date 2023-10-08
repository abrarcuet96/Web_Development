// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGqGYxXJVGKsHtpY5kdQ3nyxA9CZ6sBDA",
    authDomain: "user-email-password-auth-b5ccc.firebaseapp.com",
    projectId: "user-email-password-auth-b5ccc",
    storageBucket: "user-email-password-auth-b5ccc.appspot.com",
    messagingSenderId: "74317555271",
    appId: "1:74317555271:web:9cceecd3fc905ded00f362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;