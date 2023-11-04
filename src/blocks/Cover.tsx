import styled from "styled-components";
import { Button } from "../components/Button";

const Wrapper = styled.section`
  background-color: #996b60;
  color: white;
  min-height: 100vh;
  display: flex;
`;

const Headline = styled.h1`
  font-size: 73px;
  font-family: "PT Serif", serif;
  font-weight: 400;
  max-width: 550px;
  line-height: 96px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  max-width: 572px;
  line-height: 32px;
`;

const Body = styled.div`
  height: 800px;
  width: 50%;
  padding: 0 60px;
  padding-top: 277px;
  padding-buttom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 45px;
`;

const Image = styled.div`
  background-image: url("https://i.ibb.co/ngg5Hcr/cover-image.webp");
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 50%;
  min-height: 100%;
`;

export const Cover = () => {
  return (
    <Wrapper>
      <Image />

      <Body>
        <Headline>Alcohol for the modern drinker</Headline>

        <Subtitle>
          Light and refreshing flavors made with real, clean ingredients you can feel
          good about. Just pour, sip, and enjoy.
        </Subtitle>

        <Button
          href="/shop"
          title="Shop All"
        />
      </Body>
    </Wrapper>
  );
};
