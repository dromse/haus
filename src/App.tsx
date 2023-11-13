import styled from "styled-components";
import { Banner } from "./blocks/Banner";
import { Hero } from "./blocks/Hero";
import IntroToAperitifs from "./blocks/IntroToAperitifs";
import { Navbar } from "./blocks/Navbar";
import { Products } from "./blocks/Products";
import { Testimonials } from "./blocks/Testimonials";
import Divider from "./components/Divider";
import { GEOMETRY } from "./values/geometry";

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: ${GEOMETRY.containerPx};
`;

function App() {
  return (
    <Wrapper>
      <Banner message="Free shipping on orders over $50"></Banner>
      <Navbar />
      <Hero />

      <Content>
        <Testimonials />
        <Divider />
        <Products />
        <Divider />
        <IntroToAperitifs />
        <Divider />
      </Content>
    </Wrapper>
  );
}

export default App;
