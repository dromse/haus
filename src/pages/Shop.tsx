import axios from "axios";
import { useEffect, useState } from "react";

import styled from "styled-components";
import BigTitle from "../components/BigTitle";
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
    axios
      .get("https://632cd2bd519d17fb53b47e3a.mockapi.io/api/v1/products")
      .then((res) => setProductData(res.data));
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
