import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCQeaaOvFA1ySjthIxTB4Q8UEFtPLuU53A",
    authDomain: "hackathon-technovate-donor.firebaseapp.com",
    projectId: "hackathon-technovate-donor",
    storageBucket: "hackathon-technovate-donor.appspot.com",
    messagingSenderId: "127219622066",
    appId: "1:127219622066:web:d6133c2aeee42df6f4a9ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore()
export const storage = getStorage()