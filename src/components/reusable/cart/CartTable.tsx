import { COLOR } from "@consts/colors";
import { Product } from "@types";
import styled from "styled-components";
import { CartHeaderRow } from "./CartHeaderRow";
import { CartProductRow } from "./CartProductRow";
import OrderInfo from "./OrderInfo";

const Table = styled.table`
  font-size: 24px;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  color: ${COLOR.black};

  @media (max-width: 748px) {
    text-align: center;
  }
`;

const Bottom = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  gap: 15px;
`;

export const CartTable = ({
  cartProducts,
}: {
  cartProducts: Product[];
}): React.JSX.Element => (
  <>
    <Table>
      <CartHeaderRow />

      {cartProducts.map((cartProduct) => (
        <CartProductRow cartProduct={cartProduct} />
      ))}
    </Table>

    <Bottom>
      <OrderInfo cartProducts={cartProducts} />
    </Bottom>
  </>
);
