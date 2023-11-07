import styled from "styled-components";
import Testimonial from "../components/Testimonial";
import testimonialsData from "../values/testimonials.json";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 165px;
  padding: 55px 0;

  @media (max-width: 1200px) {
    gap: 65px;
  }
`;

export const Testimonials = () => {
  return (
    <Wrapper>
      {testimonialsData.map((item) => (
        <Testimonial
          key={item.id}
          content={item.content}
          imgUrl={item.imgUrl}
          companyDesc={item.companyDesc}
        />
      ))}
    </Wrapper>
  );
};
