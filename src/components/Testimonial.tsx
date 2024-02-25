import styled from "styled-components";

type Props = {
  content: string;
  imgUrl: string;
  companyDesc: string;
};

const Wrapper = styled.div`
  text-align: center;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  font-size: 18px;
  line-height: 32px;
`;

const Image = styled.img`
  max-width: 100%;
`

export default function Testimonial(props: Props) {
  const { content, imgUrl, companyDesc } = props;

  return (
    <Wrapper>
      <p>“{content}”</p>

      <Image
        src={imgUrl}
        alt={companyDesc}
      />
    </Wrapper>
  );
}
