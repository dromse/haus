import Cart from "@components/pages/Cart";
import Home from "@components/pages/Home";
import NotFound from "@components/pages/NotFound";
import Shop from "@components/pages/Shop";

export const ROUTES = [
  { path: "home", element: Home },
  { path: "cart", element: Cart },
  { path: "shop", element: Shop },
  { path: "*", element: NotFound },
];
