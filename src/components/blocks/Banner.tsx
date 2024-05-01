import styled from "styled-components";
import { COLOR } from "@consts/colors.ts";

const Wrapper = styled.div`
  background-color: ${COLOR.black};
  text-align: center;
  color: white;
  width: 100%;
  padding: 16px 0px;
  font-size: 14px;
`;

export const Banner = ({ message }: { message: string }): React.JSX.Element => {
  return <Wrapper>{message}</Wrapper>;
};
