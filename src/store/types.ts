import { Product } from "@types";

export type CartItem = {
  productId: string;
  amount: number;
};

export type Cart = {
  cartItems: CartItem[];
};

export type CartState = {
  cart: Cart;
  cartItems: CartItem[];
  setCartItems: (newCartItems: CartItem[]) => void;
  addItem: (item: Product) => void;
  deleteItem: (id: string) => void;
  increaseItem: (id: string) => void;
  decreaseItem: (id: string) => void;
};
