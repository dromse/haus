import axios from "axios";
import { useEffect, useState } from "react";

import styled from "styled-components";
import BigTitle from "../components/BigTitle";
import { ProductCard } from "../components/ProductCard";
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

function Shop() {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    setProductData(products)
  }, []);

  return (
    <Wrapper>
      <BigTitle>Shop</BigTitle>

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
}

export default Shop;
