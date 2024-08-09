import { TableButton } from "@components/pages/Cart";
import { UserContext } from "@context";
import { useCart } from "@store";
import { Product } from "@types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BestSeller from "./BestSeller";
import { BlackButton } from "./Button";
import ProductMenu from "./ProductMenu";

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

const Image = styled.img`
  max-width: 80%;
  height: auto;
`;

const Price = styled.p`
  font-size: 24px;
  padding-bottom: 25px;
  font-family: "PT Serif", serif;
  font-style: italic;
`;

export const XButton = styled(TableButton)`
  position: absolute;
  border: none;
  right: -50px;
`;

export const ProductCard = ({ product }: Props): React.JSX.Element => {
  const { imgUrl, title, content, isBestSeller, id, price } = product;
  const addToCart = useCart((state) => state.addItem);
  const productInCart = useCart((state) =>
    state.cartItems.find((item) => item.productId === id),
  );
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const navigateToAuthOrCart = (): void =>
    user ? addToCart(product) : navigate("/account");

  return (
    <Wrapper>
      {isBestSeller && <BestSeller />}

      <Image src={imgUrl} alt="Product Image" />

      <Title>{title}</Title>
      <Content>{content}</Content>
      <Price>{price} $</Price>

      {productInCart && productInCart.amount > 0 ? (
        <ProductMenu product={product} />
      ) : (
        <BlackButton onClick={navigateToAuthOrCart}>Add to Cart</BlackButton>
      )}
    </Wrapper>
  );
};
