import { BlackButton } from "@components/reusable/Button";
import Container from "@components/reusable/Container";
import { LinkUnderline } from "@components/reusable/LinkUnderline";
import { COLOR } from "@consts/colors";
import products from "@consts/products.json";
import { useCart } from "@store";
import { Product } from "@types";
import { Minus, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  padding: 30px 10px;
`;

const Table = styled.table`
  // border: 1px solid #a8b3bd;
  font-size: 24px;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  color: ${COLOR.black};
`;

const Row = styled.tr`
  // border: 1px solid #a8b3bd;
`;

const HeadCell = styled.th`
  // border: 1px solid #a8b3bd;
  padding: 5px;
`;

const Cell = styled.td`
  // border: 1px solid #a8b3bd;
  padding: 10px 0;
`;

const ProductHeadCell = styled(HeadCell)`
  display: flex;
  justify-content: start;
  padding-left: 50px;
`;

const ProductCell = styled(Cell)`
  display: flex;
  gap: 10px;
  align-items: center;
  border: none;
  padding-left: 5px;
`;

const QuantityHeadCell = styled(HeadCell)`
  display: flex;
  justify-content: end;
`;

const QuantityCell = styled(Cell)`
  border: none;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;

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

const Bottom = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  gap: 15px;
`;

const Image = styled.img`
  width: 100px;
`;

const TotalPrice = styled.p`
  font-size: 24px;
`;

const Taxes = styled.p`
  color: ${COLOR.black};
  font-size: 18px;
`;

const Empty = styled.div`
  color: ${COLOR.black};
  font-size: 24px;
  text-align: center;
  line-height: 45px;
`;

export default function Cart(): React.JSX.Element {
  const cartState = useCart((state) => state.cartItems);
  const deleteItem = useCart((state) => state.deleteItem);
  const increaseItem = useCart((state) => state.increaseItem);
  const decreaseItem = useCart((state) => state.decreaseItem);
  const [productData, _] = useState(products);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const items = cartState.map((item) => ({
      ...productData.filter((product) => product.id == item.productId)[0],
      amount: item.amount,
    }));

    setCartItems(items);
  }, [cartState]);

  const calcTotalPrice = (): number => {
    return cartItems.reduce(
      (acc, item) => (acc += item.price * item.amount),
      0,
    );
  };

  const CartTable = (): React.JSX.Element => (
    <>
      <Table>
        <HeaderRow />

        {cartItems.map((item) => (
          <Row key={item.id}>
            <ProductCell>
              <TableButton onClick={() => deleteItem(item.id)}>
                <X />
              </TableButton>

              <Image
                alt={item.title}
                src={item.imgUrl}
              />

              <p>{item.title}</p>
            </ProductCell>

            <Cell>{item.price} $</Cell>

            <Cell>{item.price * item.amount} $</Cell>

            <QuantityCell>
              {item.amount}

              <PlusButton onClick={() => increaseItem(item.id)}>
                <Plus />
              </PlusButton>

              <MinusButton onClick={() => decreaseItem(item.id)}>
                <Minus />
              </MinusButton>
            </QuantityCell>
          </Row>
        ))}
      </Table>

      <Bottom>
        <TotalPrice>{calcTotalPrice()}$</TotalPrice>

        <Taxes>Taxes and shipping not included</Taxes>

        <BlackButton
          to="/checkout"
          type="button"
        >
          Checkout
        </BlackButton>
      </Bottom>
    </>
  );

  const EmptyCart = (): React.JSX.Element => (
    <Empty>
      <p>Your cart is empty!</p>

      <p>
        You can add items to cart from{" "}
        <LinkUnderline
          isUppercase={false}
          href="/shop"
        >
          Shop
        </LinkUnderline>{" "}
        page.
      </p>
    </Empty>
  );

  return (
    <Wrapper>
      <Container>
        {cartItems.length === 0 ? <EmptyCart /> : <CartTable />}
      </Container>
    </Wrapper>
  );
}

const HeaderRow = (): React.JSX.Element => (
  <Row>
    <ProductHeadCell>Product</ProductHeadCell>
    <HeadCell>Price</HeadCell>
    <HeadCell>Total Price</HeadCell>
    <QuantityHeadCell>Quantity</QuantityHeadCell>
  </Row>
);
