import styled from "styled-components";
import { LinkUnderline } from "../components/LinkUnderline";

const Wrapper = styled.section`
  display: flex;
  padding: 60px 0;
  gap: 110px;

  @media(max-width: 1350px) {
    padding: 60px 20px;
  }

  @media(max-width: 1200px) {
    gap: 70px;
  }

  @media(max-width: 1100px) {
    gap: 50px;
  }

  @media(max-width: 900px) {
    flex-direction: column-reverse;
    padding: 60px 0;
    align-items: center;
  }
`

const Image = styled.img`
  object-fit: contain;
  max-width: 550px;

  @media(max-width: 1350px) {
    max-width: 50%;
  }

  @media(max-width: 900px) {
    max-width: 100%;
    object-fit: cover;
    height: 300px;
    align-self: normal;
  }

  @media(max-width: 500px) {
    height: 200px;
  }

  @media(max-width: 400px) {
    height: 150px;
  }
`

const Body = styled.div`
  display: flex;
  max-width: 660px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media(max-width: 1600px) {
    padding: 0px 20px;
  }

  @media(max-width: 900px) {
    text-align: center;
    align-items: center;
  }
`

const Title = styled.h2`
  font-size: 60px;
  font-family: "PT Serif", serif;
  line-height: 80px;
  margin-bottom: 150px;

  @media(max-width: 1600px) {
    margin-bottom: 80px;
  }

  @media(max-width: 1300px) {
    font-size: 45px;
    line-height: 50px;
    margin-bottom: 60px;
  }
`

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 35px;
`

function WhyChooseUs() {
  return (
    <Wrapper>
      <Image src="/why_choose_us/why-choose-us.webp" alt="A pile of dried strawberries and basil leaves." />

      <Body>
        <Title>We do things differently than most producers</Title>

        <Subtitle>Our flavors are derived from real fruits, herbs, and botanicals, not ingredients from a lab. We leave out the artificial ingredients and excess sugar, and tell you what’s inside. It’s a better way to drink.</Subtitle>

        <LinkUnderline href='/learn-more'>Learn More</LinkUnderline>
      </Body>
    </Wrapper>
  )
}

export default WhyChooseUs;
