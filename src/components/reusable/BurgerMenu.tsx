import styled from "styled-components";
import { LinkUnderline } from "./LinkUnderline";

import { COLOR } from "@consts/colors";
import nav_links from "@consts/nav_links.json";

const MobileList = styled.ul`
  position: fixed;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  font-size: 25px;
  background-color: ${COLOR.background};
`;

const BurgerMenu = ({
  setIsMenuVisible,
}: {
  setIsMenuVisible: Function;
}): React.JSX.Element => (
  <MobileList>
    {nav_links.map((item) => (
      <li key={item.link}>
        <LinkUnderline
          theme="white"
          href={item.link}
          onClick={() => setIsMenuVisible(false)}
        >
          {item.label}
        </LinkUnderline>
      </li>
    ))}
  </MobileList>
);

export default BurgerMenu;
