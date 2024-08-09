import { Product } from "@types";

export const calcTotalPrice = (items: Product[]): number => {
  return items.reduce(
    (acc, item) => (acc += item.price * item.amount),
    0,
  );
};
