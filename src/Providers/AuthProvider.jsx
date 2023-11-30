import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [selfBio, setSelfBio] = useState({});
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const axiosPublic = useAxiosPublic();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const handleSignOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  // auth status watched
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        axiosPublic
          .get(`/userRole?email=${user?.email}`)
          .then((response) => {
            if(response.data?.role){              
                setUserRole(response.data?.role)
                setLoading(false);
            } else{
                setUserRole('regular')
                setLoading(false);
            }
          });
      } else {
        setUser(null);
        setUserRole(null);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  useEffect(() => {
    axiosPublic.get(`/userBiodata?email=${user?.email}`).then((response) => {
      setSelfBio(response.data);
    });
  }, [user]);

  
  const contextValues = {
    loading,
    handleSignUp,
    handleSignIn,
    handleSignOut,
    handleGoogleSignIn,
    user,
    selfBio,
    setSelfBio,
    userRole
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
