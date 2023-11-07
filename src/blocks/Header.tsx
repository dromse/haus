import styled from "styled-components";
import BurgerMenuIcon from "../components/BurgerMenuIcon";
import { LinkUnderline } from "../components/LinkUnderline";
import { Logo } from "../components/Logo";

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
  font-size: 14px;
  gap: 60px;

  @media (max-width: 968px) {
    display: none;
  }
`;

const Navigation = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  padding: 40px 0;
  height: 96px;
`;

const VisibilityContainer = styled.div`
  display: none;

  @media (max-width: 968px) {
    display: block;
  }
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

        <a href="/">
          <Logo />
        </a>

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

        <VisibilityContainer>
          <BurgerMenuIcon />
        </VisibilityContainer>
      </Navigation>
    </Wrapper>
  );
};
