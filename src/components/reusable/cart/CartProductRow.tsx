import {
  MinusButton,
  PlusButton,
  Row,
  TableButton,
} from "@components/pages/Cart";
import { useCart } from "@store";
import { Product } from "@types";
import { handleDeleteItem } from "@utils/notify";
import { Minus, Plus, X } from "lucide-react";
import styled from "styled-components";

export const Cell = styled.td`
  padding: 10px 0;

  @media (max-width: 748px) {
    display: block;
  }
`;

const PriceCell = styled(Cell)`
  font-family: "PT Serif", serif;
  font-style: italic;
`;

const ProductCell = styled(Cell)`
  display: flex;
  gap: 10px;
  align-items: center;
  border: none;
  padding-left: 5px;
`;

const QuantityCell = styled(Cell)`
  border: none;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;

  @media (max-width: 748px) {
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 100px;
`;

export const CartProductRow = ({
  cartProduct: cartItem,
}: {
  cartProduct: Product;
}): React.JSX.Element => {
  const deleteItem = useCart((state) => state.deleteItem);
  const increaseItem = useCart((state) => state.increaseItem);
  const decreaseItem = useCart((state) => state.decreaseItem);

  return (
    <Row key={cartItem.id}>
      <ProductCell>
        <TableButton onClick={() => handleDeleteItem(cartItem.id, deleteItem)}>
          <X />
        </TableButton>

        <Image alt={cartItem.title} src={cartItem.imgUrl} />

        <p>{cartItem.title}</p>
      </ProductCell>

      <PriceCell>{cartItem.price} $</PriceCell>

      <PriceCell>{cartItem.price * cartItem.amount} $</PriceCell>

      <QuantityCell>
        {cartItem.amount}

        <PlusButton onClick={() => increaseItem(cartItem.id)}>
          <Plus />
        </PlusButton>

        <MinusButton onClick={() => decreaseItem(cartItem.id)}>
          <Minus />
        </MinusButton>
      </QuantityCell>
    </Row>
  );
};
