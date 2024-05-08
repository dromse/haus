import { MinusButton, PlusButton, TableButton } from "@components/pages/Cart";
import { COLOR } from "@consts/colors";
import { UserContext } from "@context";
import { useCart } from "@store";
import { Product } from "@types";
import { Minus, Plus, X } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BlackButton } from "./Button";

type Props = {
  product: Product;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  max-width: 383px;
  position: relative;
`;

const Title = styled.h3`
  font-size: 31px;
  line-height: 44px;
  font-family: "PT Serif", serif;
  margin-bottom: 16px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 27px;
  text-align: center;
`;

const Button = styled.a`
  text-transform: uppercase;
  word-spacing: 1px;
  font-size: 12px;
  background-color: ${COLOR.black};
  color: ${COLOR.white};
  padding: 20px 50px;
  border: 1px solid ${COLOR.black};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLOR.white};
    color: ${COLOR.black};
  }
`;

const Badge = styled.div`
  position: absolute;
  color: ${COLOR.white};
  font-size: 12px;
  line-height: 14px;
  background-color: ${COLOR.black};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  text-transform: uppercase;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 80px;
    height: 80px;
    right: 5%;
    top: 2%;
  }
`;

const Image = styled.img`
  max-width: 80%;
  height: auto;
`;

const Counter = styled.div`
  border: none;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  padding-top: 15px;
`;

const Price = styled.p`
  font-size: 24px;
  padding-bottom: 25px;
  font-family: "PT Serif", serif;
  font-style: italic;
`;

const ToCartOrRemove = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const XButton = styled(TableButton)`
  position: absolute;
  border: none;
  right: -50px;
`;

export const ProductCard = ({ product }: Props): React.JSX.Element => {
  const { imgUrl, title, content, isBestSeller, id, price } = product;
  const deleteItem = useCart((state) => state.deleteItem);
  const addToCart = useCart((state) => state.addItem);
  const productInCart = useCart((state) =>
    state.cartItems.find((item) => item.productId === id),
  );
  const increaseItem = useCart((state) => state.increaseItem);
  const decreaseItem = useCart((state) => state.decreaseItem);
  const user = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Wrapper>
      {isBestSeller && (
        <Badge>
          <span>Best</span>
          <span>Seller</span>
        </Badge>
      )}

      <Image
        src={imgUrl}
        alt="Product Image"
      />

      <Title>{title}</Title>
      <Content>{content}</Content>
      <Price>{price} $</Price>

      {productInCart && productInCart.amount > 0 ? (
        <>
          <ToCartOrRemove>
            <XButton onClick={() => deleteItem(id)}>
              <X />
            </XButton>
            <BlackButton to="/cart">Go to Cart</BlackButton>
          </ToCartOrRemove>

          <Counter>
            {productInCart ? productInCart.amount : 0}

            <PlusButton onClick={() => increaseItem(id)}>
              <Plus />
            </PlusButton>

            <MinusButton onClick={() => decreaseItem(id)}>
              <Minus />
            </MinusButton>
          </Counter>
        </>
      ) : (
        <Button
          onClick={() => {
            if (user) {
              addToCart(product);
            } else {
              navigate("/account");
            }
          }}
        >
          Add to Cart
        </Button>
      )}
    </Wrapper>
  );
};
