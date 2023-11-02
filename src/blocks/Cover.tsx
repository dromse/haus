import styled from "styled-components";
import { Button } from "../components/Button";
import imageUrl from "/cover-image.jpg";

const Wrapper = styled.section`
  background-color: #996b60;
  color: white;
  height: 100vh;
  display: flex;
`;

const Headline = styled.h1`
  font-size: 73px;
  font-family: "PT Serif", serif;
  font-weight: 400;
  width: 550px;
  line-height: 96px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  width: 572px;
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
  gap: 45px;
  justify-content: end;
`;

const Image = styled.div`
  background-image: url(${imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  height: 100%;
`;

export const Cover = () => {
  return (
    <Wrapper>
      <Image/>

      <Body>
        <Headline>Alcohol for the modern drinker</Headline>

        <Subtitle>
          Light and refreshing flavors made with real, clean ingredients you can feel
          good about. Just pour, sip, and enjoy.
        </Subtitle>

        <Button title="Shop All" />
      </Body>
    </Wrapper>
  );
};
