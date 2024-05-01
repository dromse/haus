import { GEOMETRY } from "@consts/geometry";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  padding: 60px 0 50px;
  justify-content: space-between;

  @media (max-width: ${GEOMETRY.containerPx}) {
    flex-direction: column-reverse;
    gap: 50px;
  }
`;

const Image = styled.img`
  max-width: 880px;
  object-fit: cover;

  @media (max-width: ${GEOMETRY.containerPx}) {
    max-width: 100%;
    flex-direction: column;
    max-height: 200px;
  }
`;

const Body = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: end;
  max-width: 385px;
  text-wrap: balance;

  @media (max-width: ${GEOMETRY.containerPx}) {
    flex-direction: row;
    max-width: 100%;
    padding: 0 40px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Title = styled.h3`
  font-family: "PT Serif", serif;
  font-size: 30px;
  line-height: 44px;
  padding-bottom: 19px;
`;

const BigTitle = styled(Title)`
  font-size: 36px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 32px;
`;

function Benefits(): React.JSX.Element {
  return (
    <Wrapper>
      <Body>
        <li>
          <Title>Easy to drink</Title>
          <Subtitle>
            The perfect anytime drink, sip Haus on its own or with simple
            mixers you probably already have like soda or tonic.
          </Subtitle>
        </li>

        <li>
          <BigTitle>Natural ingredients. Nothing fake.</BigTitle>
          <Subtitle>
            Artificial ingredients and refined sugars are a big culprit in
            hangovers. Feel good about what’s in your glass that night — and
            the next day.
          </Subtitle>
        </li>

        <li>
          <Title>Delivered to your door</Title>
          <Subtitle>
            We blend, bottle, and ship our products straight from Sonoma, CA to
            your doorstep.
          </Subtitle>
        </li>
      </Body>

      <Image
        src="/benefits/benefits.webp"
        alt="2 bottle of haus"
      ></Image>
    </Wrapper>
  );
}

export default Benefits;
