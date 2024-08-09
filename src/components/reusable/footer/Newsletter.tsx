import { COLOR } from "@consts/colors";
import styled from "styled-components";
import { Subtitle } from "../Subtitle";

import FooterColumn from "@components/reusable/FooterColumn";
import footer_links from "@consts/footer_links.json";

const Title = styled.h3`
  font-family: "PT Serif", serif;
  font-size: 42px;
  line-height: 72px;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Form = styled.form`
  border-bottom: 1px solid ${COLOR.gray};
  display: flex;
  justify-content: space-between;
`;

const Submit = styled.button.attrs({ type: "button" })`
  background-color: black;
  color: white;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.12px;
  padding-right: 10px;
  padding-left: 10px;
`;

const Input = styled.input.attrs({ type: "email" })`
  background-color: black;
  color: white;
  padding: 21px;
  flex-grow: 1;
  font-size: 18px;
  min-width: 100px;
  width: 100%;
`;

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 440px;
  gap: 20px;

  @media (max-width: 1050px) {
    padding-bottom: 100px;
  }

  @media (max-width: 600px) {
    padding-bottom: 50px;
  }
`;

const Columns = styled.div`
  display: flex;
  gap: 100px;
  flex-wrap: wrap;

  @media (max-width: 1050px) {
    gap: 30px;
  }

  @media (max-width: 900px) {
    gap: 60px;
  }
`;

function FooterBody(): React.JSX.Element {
  return (
    <Body>
      <Newsletter>
        <Title>Stay posted</Title>

        <Subtitle>
          Let's be friends. Subscribe to our newsletter to receive updates on
          new launches, recipes, playlists, and more.
        </Subtitle>

        <Form action="/subscibe_to_newsletter">
          <Input type="text" placeholder="Your email address" />
          <Submit type="submit">Submit</Submit>
        </Form>
      </Newsletter>

      <Columns>
        {footer_links.map((column) => (
          <FooterColumn key={column.title} column={column} />
        ))}
      </Columns>
    </Body>
  );
}

export default FooterBody;
