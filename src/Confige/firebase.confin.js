// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAxTLdIKst2c8E1bvo9c86ZIVLQGcrSous",
    authDomain: "project-12-9f3fd.firebaseapp.com",
    projectId: "project-12-9f3fd",
    storageBucket: "project-12-9f3fd.appspot.com",
    messagingSenderId: "713577324490",
    appId: "1:713577324490:web:1055fd750ccf6090d6b933"

    // apiKey: import.meta.eve.VITE_apiKey,
    // authDomain: import.meta.eve.VITE_authDomain,
    // projectId: import.meta.eve.VITE_projectId,
    // storageBucket: import.meta.eve.VITE_storageBucket,
    // messagingSenderId: import.meta.eve.VITE_messagingSenderId,
    // appId: import.meta.eve.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app




