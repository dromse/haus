import BigTitle from "@components/reusable/BigTitle";
import { CartTable } from "@components/reusable/cart/CartTable";
import { EmptyCart } from "@components/reusable/cart/EmptyCart";
import Container from "@components/reusable/Container";
import products from "@consts/products.json";
import { UserContext } from "@context";
import { useCart } from "@store";
import { Product } from "@types";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  padding: 30px 10px;
`;

export const Row = styled.tr``;

export const TableButton = styled.button`
  min-width: 35px;
  min-height: 35px;
  color: #a8b3bd;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;

  &:hover {
    border: 2px solid #a8b3bd;
    border-radius: 100%;
  }

  &:active {
    color: black;
    border-color: black;
  }
`;

export const PlusButton = styled(TableButton)`
  &:active {
    color: green;
    border-color: green;
  }
`;

export const MinusButton = styled(TableButton)`
  &:active {
    color: red;
    border-color: red;
  }
`;

export default function Cart(): React.JSX.Element {
  const [productData, _] = useState(products);
  const user = useContext(UserContext);
  const cartState = useCart((state) => state.cartItems);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    const mergedProductsWithCartItems = cartState.map((cartItem) => ({
      ...productData.filter((product) => product.id == cartItem.productId)[0],
      amount: cartItem.amount,
    }));

    setCartProducts(mergedProductsWithCartItems);
  }, [cartState]);

  if (user) {
    return (
      <Wrapper>
        <Container>
          {cartProducts.length === 0 ? (
            <EmptyCart />
          ) : (
            <CartTable cartProducts={cartProducts} />
          )}
        </Container>
      </Wrapper>
    );
  }

  return (
    <Container>
      <BigTitle>You need to log in or sign up before using cart!</BigTitle>;
    </Container>
  );
}
