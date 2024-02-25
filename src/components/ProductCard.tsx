import styled from "styled-components";
import { useCart } from "../store";
import { COLOR } from "../values/colors";

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

  /* @media (max-width: 38px) { */
  /* } */
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

export const ProductCard = ({ product }: Props) => {
  const { imgUrl, title, content, bestSeller, id } = product;
  const addToCart = useCart((state) => state.addItem);

  return (
    <Wrapper>
      {bestSeller && (
        <Badge>
          <span>Best</span>
          <span>Seller</span>
        </Badge>
      )}

      <Image src={imgUrl} alt="Product Image" />

      <Title>{title}</Title>
      <Content>{content}</Content>



      <Button
        onClick={() => {
          addToCart(product);
        }}
      >
        Add to Cart
      </Button>
    </Wrapper>
  );
};
