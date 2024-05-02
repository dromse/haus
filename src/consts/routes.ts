import Account from "@components/pages/Account";
import Cart from "@components/pages/Cart";
import Checkout from "@components/pages/Checkout";
import Home from "@components/pages/Home";
import Login from "@components/pages/Login";
import NotFound from "@components/pages/NotFound";
import Shop from "@components/pages/Shop";
import Signup from "@components/pages/Signup";
import ThankYou from "@components/pages/ThankYou";

export const ROUTES = [
  { path: "home", element: Home },
  { path: "cart", element: Cart },
  { path: "shop", element: Shop },
  { path: "account", element: Account },
  { path: "login", element: Login },
  { path: "signup", element: Signup },
  { path: "checkout", element: Checkout },
  { path: "thankyou", element: ThankYou },
  { path: "*", element: NotFound },
];
