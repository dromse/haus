import styled from "styled-components";

const Link = styled.a`
  border: 1px solid white;
  padding: 20px 52px;
  text-transform: uppercase;
  width: max-content;
  color: white;
  transition: all 0.5s ease;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;

export const Button = (props: { title: string }) => {
  return <Link href="/shop-all">{props.title}</Link>;
};
