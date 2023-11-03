import styled from "styled-components";
import { Logo } from "../components/Logo";
import { GEOMETRY } from "../values/geometry";

const Wrapper = styled.header`
  position: relative;
  background-color: transparent;
  color: white;
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
  align-items: center;
  min-width: ${GEOMETRY.containerPx};
  padding: 40px 0;
`;

const Link = styled.a``;

export const Header = () => {
  return (
    <Wrapper>
      <Navigation>
        <List>
          <li>
            <Link>Shop</Link>
          </li>
          <li>
            <Link>Membership</Link>
          </li>
          <li>
            <Link>Our story</Link>
          </li>
        </List>

        <Logo />

        <List>
          <li>
            <Link>Newsletter</Link>
          </li>
          <li>
            <Link>Account</Link>
          </li>
          <li>
            <Link>Cart (0)</Link>
          </li>
        </List>
      </Navigation>
    </Wrapper>
  );
};
