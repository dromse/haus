import copyright from "@consts/copyright.json";
import styled from "styled-components";
import { LinkUnderline } from "../LinkUnderline";

const CopyrightContainer = styled.div`
  display: flex;
  gap: 20px 60px;
  font-size: 16px;
  line-height: 24px;
  flex-wrap: wrap;
  align-items: center;
`;

function Copyright(): React.JSX.Element {
  return (
    <CopyrightContainer>
      <span>
        {copyright.title} {new Date().getFullYear()}
      </span>

      {copyright.links.map((link) => (
        <LinkUnderline key={link} href="/" theme="gray" isUppercase={false}>
          {link}
        </LinkUnderline>
      ))}
    </CopyrightContainer>
  );
}

export default Copyright;
