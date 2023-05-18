/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext("");
const auth = getAuth(app);
const gglProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // const [photoURL, setPhotoURL] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, gglProvider);
    }

    const loginWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const update = (currentUser, callBackFunc) => {
        setLoading(true);
        return updateProfile(currentUser , callBackFunc);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current user in observer,", currentUser);
            setUser(currentUser);
            setLoading(false);
            console.log("photo url in observer",currentUser.photoURL);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        login,
        loginWithGoogle,
        loginWithGithub,
        logout, 
        update
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;