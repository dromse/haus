import Testimonial from "@components/reusable/Testimonial";
import testimonialsData from "@consts/testimonials.json";
import styled from "styled-components";

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

export const Testimonials = (): React.JSX.Element => {
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
