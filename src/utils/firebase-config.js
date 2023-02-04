import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkLX82weNqnxEa0wA-O9tOkTE-CSFa94E",
    authDomain: "netflix-clone-e4c71.firebaseapp.com",
    projectId: "netflix-clone-e4c71",
    storageBucket: "netflix-clone-e4c71.appspot.com",
    messagingSenderId: "732940126557",
    appId: "1:732940126557:web:07f380225be57e411640b4"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);