import styled from "styled-components";
import { GEOMETRY } from "../values/geometry";
import { Logo } from "../components/Logo";

const Wrapper = styled.header`
  position: relative;
  background-color: transparent;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 18px;
  gap: 60px;
`;

const Navigation = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  min-width: ${GEOMETRY.containerPx};
  padding: 40px 0;
`;

const ListItem = styled.li`
`

export const Header = () => {
  return (
    <Wrapper>
      <Navigation>
        <List>
          <li>Shop</li>
          <li>Membership</li>
          <li>Our story</li>
        </List>
        
        <Logo />

        <List>
          <li>Newsletter</li>
          <li>Account</li>
          <li>Cart (0)</li>
        </List>
      </Navigation>
    </Wrapper>
  );
};
