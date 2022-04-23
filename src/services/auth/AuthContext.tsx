import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, User as FirebaseUser } from "firebase/auth";
import React, { FunctionComponent, useContext, useState, useEffect } from "react";
import { auth } from "../auth/firebase";
import { AuthContextProps } from "../../models";

interface IauthContext {
    currentUser: FirebaseUser | null;
    signUp: (email: string, password: string) => any;
    signIn: (email: string, password: string) => any;
    resetPassword: (email: string) => any;
}

const AuthContext = React.createContext<IauthContext | null>(null);

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider: FunctionComponent<AuthContextProps> = (props) => {
    const { children } = props;
    const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
    const [loading, setLoading] = useState(true);

    function signUp(email: string, password: string) {
        return  createUserWithEmailAndPassword(auth, email, password);
    }

    function signIn(email: string, password: string) {
        return  signInWithEmailAndPassword(auth, email, password);
    }

    function resetPassword(email: string) {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log(user)
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])
   
    const value = {
        currentUser,
        signUp,
        signIn,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
