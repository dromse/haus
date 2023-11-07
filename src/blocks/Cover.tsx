import styled from "styled-components";
import { Button } from "../components/Button";

const Wrapper = styled.section`
  background-color: #996b60;
  color: white;
  display: flex;

  @media (min-width: 1200px) {
    height: 100vh;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Headline = styled.h1`
  font-size: 73px;
  font-family: "PT Serif", serif;
  font-weight: 400;
  max-width: 550px;
  line-height: 96px;

  @media (max-width: 768px) {
    font-size: 60px;
    line-height: 60px;
    text-wrap: balance;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  max-width: 572px;
  line-height: 32px;
`;

const Body = styled.div`
  padding: 180px 60px 100px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 45px;

  @media (max-width: 768px) {
    padding: 120px 0px 50px;
    gap: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-wrap: balance;
  }
`;

const Image = styled.div`
  background-image: url("https://i.ibb.co/ngg5Hcr/cover-image.webp");
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 50%;
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
