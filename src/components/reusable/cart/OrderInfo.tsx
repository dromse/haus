import { COLOR } from "@consts/colors";
import { Product } from "@types";
import { calcTotalPrice } from "@utils/calc";
import React from "react";
import styled from "styled-components";
import { BlackButtonRDOM } from "../Button";

const TotalPrice = styled.p`
  font-size: 24px;

  font-family: "PT Serif", serif;
  font-style: italic;
`;

const Taxes = styled.p`
  color: ${COLOR.black};
  font-size: 18px;
`;

export default function OrderInfo({
  cartProducts,
}: {
  cartProducts: Product[];
}): React.JSX.Element {
  return (
    <>
      <TotalPrice>{calcTotalPrice(cartProducts)}$</TotalPrice>

      <Taxes>Taxes and shipping not included</Taxes>

      <BlackButtonRDOM to="/checkout" type="button">
        Checkout
      </BlackButtonRDOM>
    </>
  );
}
