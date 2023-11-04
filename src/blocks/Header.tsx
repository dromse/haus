import styled from "styled-components";
import { LinkUnderline } from "../components/LinkUnderline";
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
  height: 96px;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Navigation>
        <List>
          <li>
            <LinkUnderline
              theme="white"
              href="/shop"
            >
              Shop
            </LinkUnderline>
          </li>
          <li>
            <LinkUnderline
              theme="white"
              href="/membership"
            >
              Membership
            </LinkUnderline>
          </li>
          <li>
            <LinkUnderline
              theme="white"
              href="/about"
            >
              Our story
            </LinkUnderline>
          </li>
        </List>

        <Logo />

        <List>
          <li>
            <LinkUnderline
              theme="white"
              href="/newsletter"
            >
              Newsletter
            </LinkUnderline>
          </li>
          <li>
            <LinkUnderline
              theme="white"
              href="/account"
            >
              Account
            </LinkUnderline>
          </li>
          <li>
            <LinkUnderline
              theme="white"
              href="/cart"
            >
              Cart (0)
            </LinkUnderline>
          </li>
        </List>
      </Navigation>
    </Wrapper>
  );
};
