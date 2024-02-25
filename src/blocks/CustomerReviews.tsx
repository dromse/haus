import styled from "styled-components";
import Container from "../components/Container";
import Review from "../components/Review";
import { COLOR } from "../values/colors";
import reviews from '../values/reviews.json';

const Wrapper = styled.section`
  background-color: ${COLOR.black};
  max-width: 100vw;
  color: white;

`

const MyContainer = styled(Container)`
  display: flex;
  gap: 82.5px;
  padding: 50px 40px;

  text-wrap: balance;

  @media(max-width: 600px) {
    flex-direction: column;
    gap: 40px;
  }
`

function CustomerReviews() {
  return (
    <Wrapper>
      <MyContainer>
        {reviews.map(review => (
          <Review key={review.id} name={review.name} content={review.content} />
        ))
        }
      </MyContainer>
    </Wrapper>
  )
}

export default CustomerReviews;
