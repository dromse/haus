import { COLOR } from "@consts/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyLink = styled(Link)`
  border: 1px solid white;
  padding: 20px 52px;
  text-transform: uppercase;
  width: max-content;
  color: white;
  transition: all 0.5s ease;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    background-color: white;
    color: ${COLOR.black};
    cursor: pointer;
  }
`;

type Props = {
  title: string;
  href: string;
  type?: string;
  onClick?: () => void;
};

export const Button = (props: Props): React.JSX.Element => {
  const { title, href, onClick } = props;

  return (
    <MyLink to={href} onClick={onClick}>
      {title}
    </MyLink>
  );
};

export const BlackButtonRDOM = styled(Link)`
  text-transform: uppercase;
  word-spacing: 1px;
  font-size: 12px;
  background-color: ${COLOR.black};
  color: ${COLOR.white};
  padding: 20px 50px;
  border: 1px solid ${COLOR.black};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLOR.white};
    color: ${COLOR.black};
  }
`;

export const BlackButton = styled.a`
  text-transform: uppercase;
  word-spacing: 1px;
  font-size: 12px;
  background-color: ${COLOR.black};
  color: ${COLOR.white};
  padding: 20px 50px;
  border: 1px solid ${COLOR.black};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLOR.white};
    color: ${COLOR.black};
  }
`;

export const WhiteButton = styled.a`
  text-transform: uppercase;
  word-spacing: 1px;
  font-size: 12px;
  background-color: ${COLOR.white};
  color: ${COLOR.black};
  padding: 20px 50px;
  border: 1px solid ${COLOR.white};
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.black};
    color: ${COLOR.white};
  }
`;
