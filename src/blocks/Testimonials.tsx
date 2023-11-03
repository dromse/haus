import styled from "styled-components";
import Testimonial from "../components/Testimonial";
import { testimonialsData } from "../values/testimonials";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 165px;
  padding: 55px;
`;

export const Testimonials = () => {
  return (
    <Wrapper>
      {testimonialsData.map((item) => (
        <Testimonial
          key={item.id}
          content={item.content}
          imgUrl={item.imgUrl}
        />
      ))}
    </Wrapper>
  );
};
