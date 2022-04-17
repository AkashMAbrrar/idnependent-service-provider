// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDN8XqJIOWH2ya5JPIzjNvqFEho38oimG4",
    authDomain: "independent-service-prov-86d09.firebaseapp.com",
    projectId: "independent-service-prov-86d09",
    storageBucket: "independent-service-prov-86d09.appspot.com",
    messagingSenderId: "773747987885",
    appId: "1:773747987885:web:b6f62bc3f2e77c7e7f3d24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;