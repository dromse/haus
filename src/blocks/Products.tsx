import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { LinkUnderline } from "../components/LinkUnderline";
import { ProductCard } from "../components/ProductCard";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 105px;
  padding-bottom: 125px;

  @media (max-width: 768px) {
    padding-top: 30px;
  }
  @media (max-width: 1268px) {
    padding-bottom: 50px;
  }
`;

const Title = styled.h2`
  font-family: "PT Serif", serif;
  line-height: 80px;
  font-size: 64px;
  max-width: 750px;
  text-align: center;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Items = styled.div`
  margin-top: 52px;
  display: flex;
  flex-wrap: wrap;
  gap: 55px;
  justify-content: space-around;

  @media (max-width: 768px) {
    margin-top: 0px;
    gap: 0px;
  }
`;

export const Products = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://632cd2bd519d17fb53b47e3a.mockapi.io/api/v1/products")
      .then((res) => setProductData(res.data));
  }, []);

  return (
    <Wrapper>
      <Title>Made with natural ingredients, nothing fake</Title>

      <LinkUnderline href="/shop">Shop all flavours</LinkUnderline>

      <Items>
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          ></ProductCard>
        ))}
      </Items>
    </Wrapper>
  );
};
