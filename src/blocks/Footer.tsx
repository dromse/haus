import styled from "styled-components";
import Container from "../components/Container";
import FooterColumn from "../components/FooterColumn";
import { COLOR } from "../values/colors";
import copyright from "../values/copyright.json";
import footer_links from "../values/footer_links.json";
import { GEOMETRY } from "../values/geometry";

const Wrapper = styled.footer`
  background-color: ${COLOR.totalBlack};
  color: white;
  padding: 45px 0 40px;
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

const Copyright = styled.div`
  display: flex;
  gap: 20px 60px;
  font-size: 16px;
  line-height: 24px;
  flex-wrap: wrap;
`;

const Link = styled.a`
  color: ${COLOR.gray};
`;

const Title = styled.h3`
  font-family: "PT Serif", serif;
  font-size: 42px;
  line-height: 72px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 27px;
  max-width: 424px;
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

const Submit = styled.button.attrs({ type: "submit" })`
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

const MyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 125px;

  @media (max-width: ${GEOMETRY.containerPx}) {
    padding: 0px 20px;
    gap: 75px;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <MyContainer>
        <Body>
          <Newsletter>
            <Title>Stay posted</Title>

            <Subtitle>
              Let's be friends. Subscribe to our newsletter to receive updates
              on new launches, recipes, playlists, and more.
            </Subtitle>

            <Form action="/subscibe_to_newsletter">
              <Input
                type="text"
                placeholder="Your email address"
              />
              <Submit type="submit">Submit</Submit>
            </Form>
          </Newsletter>

          <Columns>
            {footer_links.map((column) => (
              <FooterColumn column={column} />
            ))}
          </Columns>
        </Body>

        <Copyright>
          <span>{copyright.title}</span>

          {copyright.links.map((link) => (
            <Link>{link}</Link>
          ))}
        </Copyright>
      </MyContainer>
    </Wrapper>
  );
}

export default Footer;
