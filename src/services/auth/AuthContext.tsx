import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, User as FirebaseUser } from "firebase/auth";
import React, { FunctionComponent, useContext, useState, useEffect } from "react";
import { auth } from "../auth/firebase";
import { AuthContextProps } from "../../models";

interface IauthContext {
    currentUser: FirebaseUser | null;
    signUp: (email: string, password: string) => any;
    signIn: (email: string, password: string) => any;
    resetPassword: (email: string) => any;
    logOut: () => any;
}

const AuthContext = React.createContext<IauthContext>({
    currentUser: null,
    signUp: (email: string, password: string) => {},
    signIn: (email: string, password: string) => {},
    resetPassword: (email: string) => {},
    logOut: () => {},
});

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider: FunctionComponent<AuthContextProps> = (props) => {
    const { children } = props;
    const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const signUp = (email: string, password: string) => {
        return  createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email: string, password: string) => {
        return  signInWithEmailAndPassword(auth, email, password);
    }

    const resetPassword = (email: string) => {
        return sendPasswordResetEmail(auth, email);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])
   
    const value = {
        currentUser,
        signUp,
        signIn,
        resetPassword,
        logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;