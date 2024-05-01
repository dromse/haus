import Container from "@components/reusable/Container";
import { LinkUnderline } from "@components/reusable/LinkUnderline";
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

const Title = styled.h2`
  font-family: "PT Serif", serif;
  font-size: 55px;
  line-height: 80px;

  @media (max-width: 500px) {
    font-size: 45px;
    line-height: 45px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  line-height: 28px;
`;

const Button = styled.a`
  text-transform: uppercase;
  word-spacing: 1px;
  font-size: 12px;
  background-color: ${COLOR.white};
  color: ${COLOR.black};
  padding: 20px 50px;
  border: 1px solid ${COLOR.white};
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.black};
    color: ${COLOR.white};
  }
`;

const Links = styled.div`
  display: flex;
  gap: 21px;
  flex-wrap: wrap;
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
            <Title>Set the mood</Title>

            <Subtitle>
              Curated playlists from Woody + Helena, plus some of our friends
              and favorite brands.
            </Subtitle>

            <Button>Spotify</Button>
          </BodyItem>

          <BodyItem>
            <Subtitle>Follow us, share us, drink Ha(us)</Subtitle>

            <Links>
              <LinkUnderline
                href="instagram"
                theme="white"
              >
                Instagram
              </LinkUnderline>

              <LinkUnderline
                href="instagram"
                theme="white"
              >
                Twitter
              </LinkUnderline>

              <LinkUnderline
                href="instagram"
                theme="white"
              >
                Facebook
              </LinkUnderline>
            </Links>
          </BodyItem>
        </Body>
      </MyContainer>
    </Wrapper>
  );
}

export default FollowUs;
