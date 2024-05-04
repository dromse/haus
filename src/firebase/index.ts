import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
};

export const firebaseApp = initializeApp(firebaseConfig);
