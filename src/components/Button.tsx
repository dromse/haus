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

export const Button = (props: Props) => {
  const { title, href } = props;

  return <Link href={href}>{title}</Link>;
};
