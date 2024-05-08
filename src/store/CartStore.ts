import { Product } from "@types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  productId: string;
  amount: number;
};

type Cart = {
  cartItems: CartItem[];
};

type CartState = {
  cart: Cart;
  cartItems: CartItem[];
  setCartItems: (newCartItems: CartItem[]) => void;
  addItem: (item: Product) => void;
  deleteItem: (id: string) => void;
  increaseItem: (id: string) => void;
  decreaseItem: (id: string) => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      cart: { cartItems: [] },
      cartItems: [],

      setCartItems: (newCartItems: CartItem[]): void =>
        set(() => {
          return { cartItems: [...newCartItems] };
        }),

      addItem: (product): void =>
        set((state) => {
          const cartItemIndex = state.cartItems.findIndex(
            (item) => item.productId === product.id,
          );

          let amount = 1;

          if (cartItemIndex > -1) {
            amount = state.cartItems[cartItemIndex].amount + 1;

            return {
              cartItems: [
                ...state.cartItems.filter(
                  (item) => item.productId !== product.id,
                ),
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
          cartItems: [
            ...state.cartItems.filter((item) => item.productId !== id),
          ],
        })),

      increaseItem: (id: string): void =>
        set((state) => {
          const cartItemIndex = state.cartItems.findIndex(
            (item) => item.productId === id,
          );

          let amount = 1;

          if (cartItemIndex > -1) {
            amount = state.cartItems[cartItemIndex].amount + 1;

            return {
              cartItems: [
                ...state.cartItems.map((item) =>
                  item.productId === id ? { ...item, amount } : item,
                ),
              ],
            };
          }

          throw new Error("Not found.");
        }),

      decreaseItem: (id: string): void => {
        set((state) => {
          const cartItemIndex = state.cartItems.findIndex(
            (item) => item.productId === id,
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
                ...state.cartItems.map((item) =>
                  item.productId === id ? { ...item, amount } : item,
                ),
              ],
            };
          }

          throw new Error("Not found.");
        });
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
