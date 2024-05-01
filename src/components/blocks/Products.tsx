import BigTitle from "@components/reusable/BigTitle";
import { LinkUnderline } from "@components/reusable/LinkUnderline";
import { ProductCard } from "@components/reusable/ProductCard";
import products from "@consts/products.json";
import { Product } from "@types";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

export const Products = (): React.JSX.Element => {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    setProductData(products);
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
          />
        ))}
      </Items>
    </Wrapper>
  );
};
