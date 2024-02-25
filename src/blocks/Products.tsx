import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { LinkUnderline } from "../components/LinkUnderline";
import { ProductCard } from "../components/ProductCard";
import BigTitle from "../components/BigTitle";
import products from '../values/products.json';

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
    setProductData(products)
  }, []);

  return (
    <Wrapper>
      <BigTitle>Made with natural ingredients, nothing fake</BigTitle>

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
