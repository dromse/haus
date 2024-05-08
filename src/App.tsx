import { UserContext } from "@context";
import { auth } from "@firebase";
import { router } from "@router";
import { useCart } from "@store";
import { User, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";

export default function App(): React.JSX.Element {
  const [user, setUser] = useState<User>();
  const setCartItems = useCart((state) => state.setCartItems);
  const cartItems = useCart((state) => state.cartItems);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        const db = getDatabase();
        const remoteCartRef = ref(db, "carts/" + user.uid);

        onValue(remoteCartRef, (snapshot) => {
          const remoteCart = snapshot.val();
          setCartItems(remoteCart.state.cartItems);
        });
      } else {
        setUser(undefined);
        setCartItems([])
      }
    });

    return unsub;
  }, []);

  useEffect(() => {
    if (user) {
      const db = getDatabase();

      const localCart = JSON.parse(
        localStorage.getItem("cart-storage") || "{}",
      );

      set(ref(db, "carts/" + user.uid), { ...localCart }).catch((err) =>
        console.log(err),
      );
    }
  }, [cartItems]);

  return (
    <UserContext.Provider value={user}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}
