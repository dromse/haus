import { MinusButton, PlusButton } from "@components/pages/Cart";
import { useCart } from "@store";
import { Product } from "@types";
import { handleDeleteItem } from "@utils/notify";
import { Minus, Plus, X } from "lucide-react";
import styled from "styled-components";
import { BlackButtonRDOM } from "./Button";
import { XButton } from "./ProductCard";

const Counter = styled.div`
  border: none;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  padding-top: 15px;
`;

const ToCartOrRemove = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

function ProductMenu({ product }: { product: Product }): React.JSX.Element {
  const deleteItem = useCart((state) => state.deleteItem);
  const increaseItem = useCart((state) => state.increaseItem);
  const decreaseItem = useCart((state) => state.decreaseItem);

  return (
    <>
      <ToCartOrRemove>
        <XButton onClick={() => handleDeleteItem(product.id, deleteItem)}>
          <X />
        </XButton>

        <BlackButtonRDOM to="/cart">Go to Cart</BlackButtonRDOM>
      </ToCartOrRemove>

      <Counter>
        {product ? product.amount : 0}

        <PlusButton onClick={() => increaseItem(product.id)}>
          <Plus />
        </PlusButton>

        <MinusButton onClick={() => decreaseItem(product.id)}>
          <Minus />
        </MinusButton>
      </Counter>
    </>
  );
}

export default ProductMenu;
