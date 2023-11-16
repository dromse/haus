import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import BurgerMenuButton from "../components/BurgerMenuButton";
import { LinkUnderline } from "../components/LinkUnderline";
import { Logo } from "../components/Logo";
import { useIsHomePage } from "../store";
import { COLOR } from "../values/colors";
import { GEOMETRY } from "../values/geometry";
import nav_links from "../values/nav_links.json";

const Wrapper = styled.header<{
  $paddingTop?: boolean;
  $transperentOnStart?: boolean;
  $isScrolled?: boolean;
}>`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  height: 60px;

  ${(props) =>
    props.$isScrolled &&
    css`
      background-color: ${COLOR.background};
    `};

  ${(props) => {
    if (!props.$transperentOnStart) {
      return css`
        background-color: ${COLOR.background};
      `;
    }
  }}
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 14px;
  gap: 60px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  top: 0;

  max-width: ${GEOMETRY.containerPx};
`;

const DesktopNavigation = styled(Navigation)`
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 968px) {
    display: none;
  }
`;

const MobileNavigation = styled(Navigation)`
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 968px) {
    display: none;
  }
`;

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

export const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const location = useLocation();
  const setIsHomePage = useIsHomePage((state) => state.setIsHomePage);
  const isHomePage = useIsHomePage((state) => state.isHomePage);

  function onHomePage() {
    if (location.pathname === "/home") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }

  useEffect(() => setIsMenuVisible(false), [location]);
  useEffect(onHomePage, [location]);

  function toggleBurgerMenu() {
    setIsMenuVisible((prev) => !prev);
  }

  function onScroll() {
    if (window.scrollY >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  return (
    <Wrapper
      $transperentOnStart={isHomePage}
      $paddingTop={!isHomePage}
      $isScrolled={isScrolled}
    >
      <DesktopNavigation>
        <List>
          {nav_links.slice(0, 3).map((item) => (
            <li key={item.link}>
              <LinkUnderline
                theme="white"
                href={item.link}
                key={item.link}
              >
                {item.label}
              </LinkUnderline>
            </li>
          ))}
        </List>

        <Link to="/home">
          <Logo />
        </Link>

        <List>
          {nav_links.slice(3, nav_links.length).map((item) => (
            <li key={item.link}>
              <LinkUnderline
                theme="white"
                href={item.link}
              >
                {item.label}
              </LinkUnderline>
            </li>
          ))}
        </List>
      </DesktopNavigation>

      <MobileNavigation>
        <Link to="/home">
          <Logo />
        </Link>

        <BurgerMenuButton
          toggle={isMenuVisible}
          onClick={toggleBurgerMenu}
        />

        {isMenuVisible && (
          <MobileList>
            {nav_links.map((item) => (
              <li key={item.link}>
                <LinkUnderline
                  theme="white"
                  href={item.link}
                >
                  {item.label}
                </LinkUnderline>
              </li>
            ))}
          </MobileList>
        )}
      </MobileNavigation>
    </Wrapper>
  );
};
