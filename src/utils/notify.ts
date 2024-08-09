import { Confirm } from "notiflix";

export const handleDeleteItem = (
  productId: string,
  deleteItem: Function,
): void => {
  Confirm.show(
    "Remove Confirm",
    "Do you want to remove product?",
    "Yes",
    "No",
    () => {
      deleteItem(productId);
    },
    () => { },
    { okButtonBackground: "#f080a0", titleColor: "#f080a0" },
  );
};
