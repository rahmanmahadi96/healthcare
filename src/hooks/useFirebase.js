import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const [error, setError] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);

    const auth = getAuth();

    const handleGoogleSign = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    const togglelogIn = e => {
        setIsLogIn(e.target.checked);
      }
    
      const handleEmail = e => {
        setEmail(e.target.value);
      }
    
    
      const handlePass = e => {
        setPassword(e.target.value);
      }

      const handleRegister = e => {
        console.log(email, password);
        e.preventDefault();
        if(password.length < 6){
          setError("password must be 6 characters");
          return;
        }
        if(!/(?=.*[A-Z].*[A-z])/.test(password)){
          setError('password must contain 2 uppercase');
          return;
        }
    
        isLogIn ?  processLogIn(email, password)  : createNewUser(email, password);
    
      }
    
      const processLogIn = (email, password) => {
    
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => {
          setError(error.message);
        })
      }
    
    
        const createNewUser = (email, password) => {
          createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
          verifyEmail();
        })
        .catch(error => {
          setError(error.message);
        })
        }
    
        const verifyEmail  = () => {
          sendEmailVerification(auth.currentUser)
          .then(result => {
            console.log(result);
          })
        }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        handleGoogleSign,
        logOut,
        handleRegister,
        handlePass,
        handleEmail,
        togglelogIn,
        error
    }
}

export default useFirebase;