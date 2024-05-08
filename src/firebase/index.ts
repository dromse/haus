import { FirebaseOptions, initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Notify } from "notiflix";
import { useNavigate } from "react-router-dom";

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_API_KEY,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
setPersistence(auth, browserLocalPersistence);

type UseSignup = {
  signup: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};
export const useAuth = (): UseSignup => {
  const navigate = useNavigate();

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

  return { signup, login, logout };
};

Notify.init({
  position: "right-bottom",
});
const handleError = (msg: string): void => {
  Notify.failure(`Error: ${msg}!`);
  console.error(msg);
};

export { auth };
