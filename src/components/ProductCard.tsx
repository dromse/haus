import styled from "styled-components";
import { COLOR } from "../values/colors";

type Props = {
  product: Product;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 665px;
  width: 383px;
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
`;

export const ProductCard = ({ product }: Props) => {
  const { imgUrl, title, content, link, bestSeller } = product;

  return (
    <Wrapper>
      {bestSeller && (
        <Badge>
          <span>Best</span>
          <span>Seller</span>
        </Badge>
      )}

      <img src={imgUrl} />

      <Title>{title}</Title>
      <Content>{content}</Content>
      <Button href={link}>Shop now</Button>
    </Wrapper>
  );
};