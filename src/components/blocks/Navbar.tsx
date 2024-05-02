import BurgerMenuButton from "@components/reusable/BurgerMenuButton";
import { LinkUnderline } from "@components/reusable/LinkUnderline";
import { Logo } from "@components/reusable/Logo";
import { COLOR } from "@consts/colors";
import { GEOMETRY } from "@consts/geometry";
import nav_links from "@consts/nav_links.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  height: 60px;
  background-color: ${COLOR.totalBlack};
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

  function toggleBurgerMenu(): void {
    setIsMenuVisible((prev) => !prev);
  }

  return (
    <Wrapper>
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
                  onClick={() => setIsMenuVisible(false)}
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
