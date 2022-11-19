import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import app from '../firebase.config';

export const AuthContext=createContext();

 const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,currentUser=>{
        console.log('user observing');
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>unsubscribe();
    },[])

    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }

    const updateUser=(userInfo)=>{
        return updateUser(user,userInfo);
    }

    const authInfo={
        createUser,
        signIn,
        user,
        logOut,
        updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;