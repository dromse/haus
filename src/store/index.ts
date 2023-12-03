import { create } from "zustand";

type HomePageState = {
  isHomePage: boolean;
  setIsHomePage: (is: boolean) => void;
};

export const useIsHomePage = create<HomePageState>((set) => ({
  isHomePage: false,
  setIsHomePage: (is) => set(() => ({ isHomePage: is })),
}));

type CartItem = {
  productId: string;
  amount: number;
};

type Cart = {
  cartId: string;
  cartItems: CartItem[];
};

type CartState = {
  cart: Cart | {};
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: () => void;
};

export const useCart = create<CartState>((set) => ({
  cart: { cartId: "123", cartItems: [] },
  cartItems: [],
  addItem: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeItem: () => { },
}));
