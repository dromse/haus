import styled from "styled-components";

const Link = styled.a`
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
    color: black;
    cursor: pointer;
  }
`;

type Props = {
  title: string;
  href: string;
};

const Btn = styled.button`
  padding: 10px 15px;
  font-size: 15px;

  &:hover {
    filter: brightness(0.7);
  }
`;

const RedBtn = styled(Btn)`
  background-color: indianred;
`;
const YellowBtn = styled(Btn)`
  background-color: yellow;
`;
const GreenBtn = styled(Btn)`
  background-color: palegreen;
`;

export const IncreaseButton = (func) => (
  <GreenBtn onClick={() => func}>+</GreenBtn>
);
export const DecreaseButton = (func) => (
  <YellowBtn onClick={() => func}>-</YellowBtn>
);
export const DeleteButton = (func) => <RedBtn onClick={() => func}>x</RedBtn>;

export const Button = (props: Props) => {
  const { title, href } = props;

  return <Link href={href}>{title}</Link>;
};
