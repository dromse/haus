import styled from "styled-components";

const Line = styled.div`
  margin: 0 auto;
  height: 1px;
  background-color: #bdbdbd;
  width: 100%;

  @media (max-width: 1330px) {

  width: 80%;
  }
`;

const Divider = () => {
  return <Line />;
};

export default Divider;
