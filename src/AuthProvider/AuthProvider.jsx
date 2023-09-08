/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    
    const GoogleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)

    const handleGoogleLogin = ()=>{
    return signInWithPopup(auth, GoogleProvider)
    }

    const handleSignOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })

        return unsubscribe;
    },[])

    const value = {
        handleGoogleLogin,
        handleSignOut,
        user,
    }





    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
