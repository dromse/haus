import BurgerMenuButton from "@components/reusable/BurgerMenuButton";
import { LinkUnderline } from "@components/reusable/LinkUnderline";
import { Logo } from "@components/reusable/Logo";
import { COLOR } from "@consts/colors";
import { GEOMETRY } from "@consts/geometry";
import nav_links from "@consts/nav_links.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { RuleSet, css } from "styled-components";

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

  ${(props): RuleSet<object> | undefined => {
    if (props.$isScrolled) {
      return css`
        background-color: ${COLOR.background};
      `;
    }
  }}

  ${(props): RuleSet<object> | undefined => {
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

export const Navbar = (): React.JSX.Element => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return (): void => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleBurgerMenu(): void {
    setIsMenuVisible((prev) => !prev);
  }

  function onScroll(): void {
    if (window.scrollY >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  return (
    <Wrapper $isScrolled={isScrolled}>
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
          didToggle={isMenuVisible}
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
