import styled from "styled-components";
import { COLOR } from "../values/colors.ts";

const Wrapper = styled.div`
  background-color: ${COLOR.black};
  text-align: center;
  color: white;
  width: 100%;
  padding: 16px 0px;
  font-size: 14px;
`;

export const Banner = ({ message }: { message: string }) => {
  return <Wrapper>{message}</Wrapper>;
};
