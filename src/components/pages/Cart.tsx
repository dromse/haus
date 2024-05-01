import BigTitle from "@components/reusable/BigTitle";
import Container from "@components/reusable/Container";
import { COLOR } from "@consts/colors";
import products from "@consts/products.json";
import { useCart } from "@store";
import { Product } from "@types";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  padding: 30px 10px;
`;

const MyTitle = styled(BigTitle)`
  color: ${COLOR.gray};
`;

const List = styled.ul`
  font-size: 18px;
`;

const Menu = styled.span``;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  padding: 10px 15px;
  font-size: 15px;

  &:hover {
    filter: brightness(0.7);
  }
`;

const RedBtn = styled(Btn)`
  background-color: indianred;
`;
const YellowBtn = styled(Btn)`
  background-color: yellow;
`;
const GreenBtn = styled(Btn)`
  background-color: palegreen;
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

  return (
    <Wrapper>
      <Container>
        {cartState.length === 0 ? (
          <MyTitle>Your Cart is empty</MyTitle>
        ) : (
          cartItems.map((item, index) => (
            <List key={index}>
              <ListItem>
                {index + 1}. {item.title} - {item.amount} - {item.price} $
                <Menu>
                  <GreenBtn onClick={() => decreaseItem(item.id)}>+</GreenBtn>

                  <YellowBtn onClick={() => increaseItem(item.id)}>
                    -
                  </YellowBtn>

                  <RedBtn onClick={() => deleteItem(item.id)}>x</RedBtn>
                </Menu>
              </ListItem>
            </List>
          ))
        )}
        <br></br>

        <p>Total Price: {calcTotalPrice()} $</p>
      </Container>
    </Wrapper>
  );
}
