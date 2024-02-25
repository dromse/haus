import styled from "styled-components";
import BigTitle from "../components/BigTitle";
import Container from "../components/Container";
import { useCart } from "../store";
import { COLOR } from "../values/colors";
import { useEffect, useState } from "react";
import axios from "axios";
import products from "../values/products.json";
import { DecreaseButton, DeleteButton, IncreaseButton } from "../components/Button";

const Wrapper = styled.main`
  padding: 30px 10px;
`;

const MyTitle = styled(BigTitle)`
  color: ${COLOR.gray};
`;

const List = styled.ul`
  font-size: 18px;
`;



const Menu = styled.span``

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

function Cart() {
  const cartState = useCart((state) => state.cartItems);
  const deleteItem = useCart((state) => state.deleteItem);
  const increaseItem = useCart((state) => state.increaseItem);
  const decreaseItem = useCart((state) => state.decreaseItem);
  const [productData, setProductData] = useState(products);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const items = cartState.map((item) => ({
      ...productData.filter((product) => product.id == item.productId)[0],
      amount: item.amount,
    }));

    setCartItems(items);
  }, [cartState]);

  const calcTotalPrice = () => {
    return cartItems.reduce(
      (acc, item) => (acc += item.price * item.amount),
      0
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
                  <IncreaseButton func={decreaseItem(item.id)}/>
                  <DecreaseButton func={increaseItem(item.id)}/>
                  <DeleteButton func={deleteItem(item.id)}/>
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

export default Cart;
