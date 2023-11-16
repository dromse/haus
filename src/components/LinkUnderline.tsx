import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { COLOR } from "../values/colors";

type Theme = "white" | "black" | "gray";

const MyLink = styled(Link) <{ $theme?: Theme; $uppercase?: boolean }>`
  text-transform: uppercase;

  ${(props) =>
    props.$uppercase === false &&
    css`
      text-transform: none;
    `}
  color: black;
  display: inline-block;

  ${({ $theme }) => {
    if ($theme === "white") {
      return css`
        color: white;
        border-color: ${COLOR.white};
      `;
    } else if ($theme === "gray") {
      return css`
        color: ${COLOR.gray};
        border-color: ${COLOR.gray};
      `;
    }
  }};

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

    ${({ $theme }) => {
    if ($theme === "white") {
      return css`
          border-color: ${COLOR.white};
        `;
    } else if ($theme === "gray") {
      return css`
          border-color: ${COLOR.white};
        `;
    }
  }};
  }

  &:hover {
    ${({ $theme }) => {
    if ($theme === "gray") {
      return css`
          color: white;
        `;
    }
  }};
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }
`;

type Props = {
  theme?: Theme;
  children: string;
  href: string;
  uppercase?: boolean;
};

export const LinkUnderline = (props: Props) => {
  const { theme, children, href, uppercase } = props;

  return (
    <MyLink
      $theme={theme}
      to={href}
      $uppercase={uppercase}
    >
      {children}
    </MyLink>
  );
};
