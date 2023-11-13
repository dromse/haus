import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import BurgerMenuButton from "../components/BurgerMenuButton";
import { LinkUnderline } from "../components/LinkUnderline";
import { Logo } from "../components/Logo";
import { COLOR } from "../values/colors";

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
`;

const Navigation = styled.nav<{ $isScrolled?: boolean }>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  height: 96px;
  z-index: 10;
  width: 100vw;

  ${(props) => props.$isScrolled && css`background-color: ${COLOR.background}; top: 0; position: fixed;`};
`;

const DesktopNavigation = styled(Navigation)`
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 968px) {
    display: none;
  }
`

const MobileNavigation = styled(Navigation)`
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 968px) {
    display: none;
  }
`

const MobileList = styled.ul`
  position: fixed;
  display: flex;
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
`

export const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  function onScroll() {
    if (window.scrollY >= 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  window.addEventListener('scroll', onScroll)

  useEffect(
    () => window.removeEventListener('scroll', onScroll), []
  )

  function toggleBurgerMenu() {
    setIsMenuVisible((prev) => !prev)
  }

  return (
    <Wrapper>
      <DesktopNavigation $isScrolled={isScrolled}>
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
      </DesktopNavigation>

      <MobileNavigation $isScrolled={isScrolled}>
        <a href="/">
          <Logo />
        </a>

        <BurgerMenuButton toggle={isMenuVisible} onClick={toggleBurgerMenu} />

        {isMenuVisible && <MobileList>
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
        </MobileList>}
      </MobileNavigation>

    </Wrapper>
  );
};
