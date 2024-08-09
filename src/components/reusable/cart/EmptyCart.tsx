import { COLOR } from "@consts/colors";
import styled from "styled-components";
import { LinkUnderline } from "../LinkUnderline";

const Empty = styled.div`
  color: ${COLOR.black};
  font-size: 24px;
  text-align: center;
  line-height: 45px;
`;

export const EmptyCart = (): React.JSX.Element => (
  <Empty>
    <p>Your cart is empty!</p>

    <p>
      You can add items to cart from{" "}
      <LinkUnderline isUppercase={false} href="/shop">
        Shop
      </LinkUnderline>{" "}
      page.
    </p>
  </Empty>
);
