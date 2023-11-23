
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
        loading,
        
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;

