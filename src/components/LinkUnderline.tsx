import styled, { css } from "styled-components";
import { COLOR } from "../values/colors";

const Link = styled.a<{ $theme?: "white" | "black" }>`
  text-transform: uppercase;

  &:before {
    display: block;
    padding-bottom: 5px;
    content: "";
  }
  &:after {
    border-bottom: 2px solid ${COLOR.black};
    display: block;
    content: "";
    padding-bottom: 3px;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 250ms ease-in-out;

    ${(props) =>
    props.$theme === "white" &&
    css`
        border-color: ${COLOR.white};
      `};
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }
`;

type Props = {
  theme?: "white" | "black";
  children: string;
  href: string;
};

export const LinkUnderline = (props: Props) => {
  const { theme, children, href } = props;

  return (
    <Link
      $theme={theme}
      href={href}
    >
      {children}
    </Link>
  );
};
