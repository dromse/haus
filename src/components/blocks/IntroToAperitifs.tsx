import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 4rem;
`

const Image = styled.img`
  max-width: 100%;
`

const Title = styled.h2`
  font-family: "PT Serif", serif;
  font-size: 53px;
`

const Subtitle = styled.p`
  max-width: 550px;
  font-size: 18px;
  line-height: 32px;
`

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0px 95px;

  text-wrap: balance;

  @media(max-width: 1440px) {
    padding-left: 10px; 
    padding-right:  10px;
  }

  @media(max-width: 1095px) {
    flex-direction: column;
    gap: 30px;
  }
`

function IntroToAperitifs(): React.JSX.Element {
  return (
    <Wrapper>
      <Image src="/aperitifs/aperitifs.webp" />
      <Body>
        <Title>
          An intro to apéritifs
        </Title>
        <Subtitle>
          Apéritifs are a category of spirits with complex flavors derived from fruits, herbs, and botanicals. Their lighter alcohol content (less than whiskey, more than wine) makes them perfect to sip all evening.
        </Subtitle>
      </Body>
    </Wrapper>
  )
}

export default IntroToAperitifs;
