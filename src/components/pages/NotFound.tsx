import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: gray;
  text-align: center;
  padding: 30px;
`;

export default function NotFound(): React.JSX.Element {
  return <Title>Page Not Found</Title>;
}
