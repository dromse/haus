import styled from "styled-components";
import { COLOR } from "../values/colors";

type Props = { content: string, name: string };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  text-align: center;
`

const Subtitle = styled.p`
  line-height: 32px;
  font-size: 18px;
`

const Name = styled.span`
  text-transform: uppercase;
  line-height: 21px;
`

const GrayText = styled.span`
  color: ${COLOR.gray};
  font-size: 16px;
  line-height: 24px;
`

function Review(props: Props) {
  const { content, name } = props;

  return (
    <Wrapper>
      <Subtitle>
        “{content}”
      </Subtitle>

      <Name>— {name}</Name>

      <GrayText>
        Verified Buyer
      </GrayText>
    </Wrapper>
  )
}

export default Review;
