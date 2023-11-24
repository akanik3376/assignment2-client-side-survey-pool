/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../Confige/firebase.confin'

export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    // Login with google
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
    }

    // create user with email & password
    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password,)
    }


    // login user with email & password
    const LoginUser = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }



    // Logout user 
    const logoutUser = () => {
        setIsLoading(true)
        return signOut(auth)
    }

    // User set and dependency

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

            setIsLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])


    // set value & send value object as a props
    const usersInfo = {
        user,
        isLoading,
        googleLogin,
        createUser,
        LoginUser,
        logoutUser

    }

    return (
        <AuthContext.Provider value={usersInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;