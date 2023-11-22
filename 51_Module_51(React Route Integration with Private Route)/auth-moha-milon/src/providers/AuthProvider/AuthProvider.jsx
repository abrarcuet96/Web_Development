import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);
const googleProvider= new GoogleAuthProvider();
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
    const signInWithGoogle= ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    // observe auth state change:
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('observing current user inside useEffect of AuthProvider', currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = { user, loading, createUser,signInWithGoogle, signInUser, logOut };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;