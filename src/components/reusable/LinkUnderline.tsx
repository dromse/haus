import { COLOR } from "@consts/colors";
import { Link } from "react-router-dom";
import styled, { RuleSet, css } from "styled-components";

type Theme = "white" | "black" | "gray";

const MyLink = styled(Link)<{ $theme?: Theme; $uppercase?: boolean }>`
  text-transform: uppercase;

  ${(props): RuleSet<object> | undefined => {
    if (props.$uppercase === false) {
      return css`
        text-transform: none;
      `;
    }
  }}

  color: ${COLOR.black};
  display: inline-block;

  ${({ $theme }): RuleSet<object> | undefined => {
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

    ${({ $theme }): RuleSet<object> | undefined => {
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
    ${({ $theme }): RuleSet<object> | undefined => {
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
  isUppercase?: boolean;
  onClick?: () => unknown;
};

export const LinkUnderline = (props: Props): React.JSX.Element => {
  const { theme, children, href, isUppercase, onClick } = props;

  return (
    <MyLink
      $theme={theme}
      to={href}
      $uppercase={isUppercase}
      onClick={onClick}
    >
      {children}
    </MyLink>
  );
};
