import { FirebaseOptions, initializeApp } from "firebase/app";
import {
  User,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_API_KEY,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
setPersistence(auth, browserLocalPersistence);

type UseSignup = {
  signup: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  userState: User | undefined;
};
export const useAuth = (): UseSignup => {
  const [userState, setUserState] = useState<User>();
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(user);
      } else {
        setUserState(undefined);
      }

      return unsub;
    });
  }, []);

  const signup = (email: string, password: string): void => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Notify.success("You successfully signed up!");

        navigate("/account");
      })
      .catch((error) => {
        handleError(error.message);
      });
  };

  const login = (email: string, password: string): void => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Notify.success("You successfully logged in!");

        navigate("/account");
      })
      .catch((error) => {
        handleError(error.message);
      });
  };

  const logout = (): void => {
    signOut(auth)
      .then(() => {
        Notify.success("You successfully logged out!");
      })
      .catch((error) => {
        handleError(error.message);
      });
  };

  return { signup, login, logout, userState };
};

Notify.init({
  position: "right-bottom",
});
const handleError = (msg: string): void => {
  Notify.failure(`Error: ${msg}!`);
  console.error(msg);
};
