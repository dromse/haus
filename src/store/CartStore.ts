import { Product } from "@types";
import { create } from "zustand";

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
  addItem: (item: Product) => void;
  deleteItem: (id: string) => void;
  increaseItem: (id: string) => void;
  decreaseItem: (id: string) => void;
};

export const useCart = create<CartState>()((set) => ({
  cart: { cartId: "123", cartItems: [] },
  cartItems: [],
  addItem: (product): void =>
    set((state) => {
      const cartItemIndex = state.cartItems.findIndex(
        (obj) => obj.productId === product.id,
      );

      let amount = 1;

      if (cartItemIndex > -1) {
        amount = state.cartItems[cartItemIndex].amount + 1;

        return {
          cartItems: [
            ...state.cartItems.filter((item) => item.productId !== product.id),
            { productId: product.id, amount },
          ],
        };
      }

      return {
        cartItems: [...state.cartItems, { productId: product.id, amount }],
      };
    }),

  deleteItem: (id: string): void =>
    set((state) => ({
      cartItems: [...state.cartItems.filter((item) => item.productId !== id)],
    })),

  increaseItem: (id: string): void =>
    set((state) => {
      const cartItemIndex = state.cartItems.findIndex(
        (obj) => obj.productId === id,
      );

      let amount = 1;

      if (cartItemIndex > -1) {
        amount = state.cartItems[cartItemIndex].amount + 1;

        return {
          cartItems: [
            ...state.cartItems.filter((item) => item.productId !== id),
            { productId: id, amount },
          ],
        };
      }

      throw new Error("Not found.");
    }),

  decreaseItem: (id: string): void => {
    set((state) => {
      const cartItemIndex = state.cartItems.findIndex(
        (obj) => obj.productId === id,
      );

      let amount = 1;

      if (cartItemIndex > -1) {
        amount = state.cartItems[cartItemIndex].amount - 1;

        if (amount === 0) {
          return {
            cartItems: [
              ...state.cartItems.filter((item) => item.productId !== id),
            ],
          };
        }

        return {
          cartItems: [
            ...state.cartItems.filter((item) => item.productId !== id),
            { productId: id, amount },
          ],
        };
      }

      throw new Error("Not found.");
    });
  },
}));
