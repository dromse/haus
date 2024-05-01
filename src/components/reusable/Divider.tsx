import styled from "styled-components";

const Line = styled.div`
  margin: 0 auto;
  height: 1px;
  background-color: #bdbdbd;
  width: 100%;
`;

export default function Divider(): React.JSX.Element {
  return <Line />;
}
