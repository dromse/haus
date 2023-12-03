import styled from "styled-components";
import BigTitle from "../components/BigTitle";
import Container from "../components/Container";
import { useCart } from "../store";
import { COLOR } from "../values/colors";

const Wrapper = styled.main`
  padding: 30px 0;
`;

const MyTitle = styled(BigTitle)`
  color: ${COLOR.gray};
`;

function Cart() {
  const cartItems = useCart((state) => state.cartItems);

  return (
    <Wrapper>
      <Container>
        {cartItems.length === 0 ? (
          <MyTitle>Your Cart is empty</MyTitle>
        ) : (
          cartItems.map((item) => item.productId)
        )}
      </Container>
    </Wrapper>
  );
}

export default Cart;
