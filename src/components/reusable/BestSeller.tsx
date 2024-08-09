import { COLOR } from "@consts/colors";
import styled from "styled-components";

const Badge = styled.div`
  position: absolute;
  color: ${COLOR.white};
  font-size: 12px;
  line-height: 14px;
  background-color: ${COLOR.black};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  text-transform: uppercase;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 80px;
    height: 80px;
    right: 5%;
    top: 2%;
  }
`;

function BestSeller(): React.JSX.Element {
  return (
    <Badge>
      <span>Best</span>
      <span>Seller</span>
    </Badge>
  );
}

export default BestSeller;
