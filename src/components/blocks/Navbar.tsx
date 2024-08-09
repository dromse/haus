import BurgerMenu from "@components/reusable/BurgerMenu";
import BurgerMenuButton from "@components/reusable/BurgerMenuButton";
import LinkWithBadge from "@components/reusable/LinkWithBadge";
import { Logo } from "@components/reusable/Logo";
import NavbarLink from "@components/reusable/NavbarLink";
import { COLOR } from "@consts/colors";
import { GEOMETRY } from "@consts/geometry";
import nav_links from "@consts/nav_links.json";
import { useCart } from "@store";
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

export const Navbar = (): React.JSX.Element => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const totalQuantity = useCart((state) => state.cartItems).reduce(
    (acc, item) => acc + item.amount,
    0,
  );

  const toggleBurgerMenu = (): void => setIsMenuVisible((prev) => !prev);

  return (
    <Wrapper>
      <DesktopNavigation>
        <List>
          {nav_links.slice(0, 3).map((item) => (
            <NavbarLink item={item} />
          ))}
        </List>

        <Link to="/home">
          <Logo />
        </Link>

        <List>
          {nav_links.slice(3, nav_links.length).map((item) =>
            item.link === "/cart" ? (
              <li key={item.link}>
                <LinkWithBadge
                  link={item.link}
                  label={item.label}
                  badgeText={String(totalQuantity)}
                />
              </li>
            ) : (
              <NavbarLink item={item} />
            ),
          )}
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

        {isMenuVisible && <BurgerMenu setIsMenuVisible={setIsMenuVisible} />}
      </MobileNavigation>
    </Wrapper>
  );
};
