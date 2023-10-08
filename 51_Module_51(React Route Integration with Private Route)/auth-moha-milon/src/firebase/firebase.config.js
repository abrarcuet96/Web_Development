// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_9gzekcXw3MYfGnCMGcUBwSU4ANpf_D4",
    authDomain: "auth-moha-milon-e597d.firebaseapp.com",
    projectId: "auth-moha-milon-e597d",
    storageBucket: "auth-moha-milon-e597d.appspot.com",
    messagingSenderId: "545605681307",
    appId: "1:545605681307:web:1781b2a957f9f8cb52863e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;