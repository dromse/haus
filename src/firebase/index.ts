import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
};

export const firebaseApp = initializeApp(firebaseConfig);

type AuthState = "guest" | "login" | "singup" | "error";

type UseSignup = {
  signup: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  authState: AuthState;
  errorMsg: string;
};

const auth = getAuth(firebaseApp);

export const useAuth = (): UseSignup => {
  const [errorMsg, setErrorMsg] = useState("");
  const [authState, setAuthState] = useState<AuthState>("guest");

  const signup = (email: string, password: string): void => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthState("singup");
        console.log(userCredential);
      })
      .catch((error) => {
        setAuthState("error");
        setErrorMsg(error.message);

        console.log(error.message);
      });
  };

  const login = (email: string, password: string): void => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setAuthState("singup");

        console.log(user);
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setAuthState("error");
        setErrorMsg(errorMessage);

        console.log(errorCode, errorMessage);
      });
  };

  const logout = (): void => {
    signOut(auth)
      .then(() => {
        setAuthState("guest");
      })
      .catch((error) => {
        setErrorMsg(error.message);
        console.log(error.message);
      });
  };

  return { signup, login, logout, authState, errorMsg };
};
