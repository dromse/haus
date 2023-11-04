import styled from "styled-components";
import { GEOMETRY } from "../values/geometry";

const Line = styled.div`
  height: 2px;
  background-color: #bdbdbd;
  width: ${GEOMETRY.containerPx};
`;

const Divider = () => {
  return <Line />;
};

export default Divider;
