import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../../firebase.init";

export const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const signInUser = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (userData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser , userData)
    }

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth , email)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (curUser)=>{
            setUser(curUser);
            setLoading(false)
        })
        return ()=>(
            unSubscribe()
        )
    },[])



    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        updateUserProfile,
        signOutUser,
        googleSignIn,
        resetPassword,
    }


    return(
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    )
}