import React from "react";
import AuthContext from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const info = {
    user,
    loading,
    setLoading,
    handelFirebaseLogin,
    handelFirebaseLogout,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function handelFirebaseLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handelFirebaseLogout() {
    return signOut(auth);
  }

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
