import Container from "@components/reusable/Container";
import OtherSocial from "@components/reusable/OtherSocial";
import Spotify from "@components/reusable/Spotify";
import { COLOR } from "@consts/colors";
import styled from "styled-components";

const Wrapper = styled.section`
  background-image: url("/follow_us/follow-us.webp");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  padding: 60px;

  @media (max-width: 600px) {
    padding: 20px;
  }

  @media (max-width: 500px) {
    padding: 10px;
  }

  @media (max-width: 300px) {
    padding: 10px 0;
  }

  @media (max-width: 250px) {
    padding: 0px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  gap: 22px;
`;

const BodyItem = styled.div`
  background-color: ${COLOR.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 70px;
  gap: 26px;
  text-align: center;

  @media (max-width: 500px) {
    padding: 30px;
  }

  @media (max-width: 300px) {
    padding: 20px 10px;
  }

  @media (max-width: 250px) {
    padding: 0px;
  }
`;

export const FollowUsSubtitle = styled.p`
  font-size: 16px;
  line-height: 28px;
`;

const MyContainer = styled(Container)`
  @media (max-width: 1300px) {
    display: flex;
    justify-content: center;
  }
`;

function FollowUs(): React.JSX.Element {
  return (
    <Wrapper>
      <MyContainer>
        <Body>
          <BodyItem>
            <Spotify />
          </BodyItem>

          <BodyItem>
            <OtherSocial />
          </BodyItem>
        </Body>
      </MyContainer>
    </Wrapper>
  );
}

export default FollowUs;
