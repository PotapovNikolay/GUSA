import { initializeApp } from "firebase/app";

import {getAuth, Us ,signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {useEffect, useState} from "react";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCSdRnBM9u6K7zmdnpC_hhzTO2eo3Mue5w",
    authDomain: "firstapp-250c5.firebaseapp.com",
    projectId: "firstapp-250c5",
    storageBucket: "firstapp-250c5.appspot.com",
    messagingSenderId: "571236614286",
    appId: "1:571236614286:web:e0f4a123dcba963ba109df",
    measurementId: "G-5GF46GY7YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export function signup(email,password){
    return createUserWithEmailAndPassword(auth, email, password );
}

export function login(email,password){
    return signInWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}

export function logOut(){
    return signOut(auth)
}