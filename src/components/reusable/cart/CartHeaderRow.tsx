import { Row } from "@components/pages/Cart";
import styled from "styled-components";

const HeadCell = styled.th`
  padding: 5px;

  @media (max-width: 748px) {
    display: none;
  }
`;

const ProductHeadCell = styled(HeadCell)`
  display: flex;
  justify-content: start;
  padding-left: 50px;
`;

const QuantityHeadCell = styled(HeadCell)`
  display: flex;
  justify-content: end;

  @media (max-width: 748px) {
    display: none;
  }
`;

export const CartHeaderRow = (): React.JSX.Element => (
  <Row>
    <ProductHeadCell>Product</ProductHeadCell>
    <HeadCell>Price</HeadCell>
    <HeadCell>Total Price</HeadCell>
    <QuantityHeadCell>Quantity</QuantityHeadCell>
  </Row>
);
