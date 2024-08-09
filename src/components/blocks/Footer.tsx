import Container from "@components/reusable/Container";
import Copyright from "@components/reusable/footer/Copyright";
import FooterBody from "@components/reusable/footer/Newsletter";
import { COLOR } from "@consts/colors";
import { GEOMETRY } from "@consts/geometry";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: ${COLOR.totalBlack};
  color: white;
  padding: 45px 0 40px;
`;

const MyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 125px;

  @media (max-width: ${GEOMETRY.containerPx}) {
    padding: 0px 20px;
    gap: 75px;
  }
`;

function Footer(): React.JSX.Element {
  return (
    <Wrapper>
      <MyContainer>
        <FooterBody />

        <Copyright />
      </MyContainer>
    </Wrapper>
  );
}

export default Footer;
