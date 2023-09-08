import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";



const GoogleProvider = new GoogleAuthProvider();

const handleGoogleLogin = ()=>{
   return signInWithPopup(auth, GoogleProvider)
}

const handleSignOut = () =>{
    return signOut(auth)
}

export const value = {
    handleGoogleLogin,
    handleSignOut
}


export const  AuthContext = createContext(value)

