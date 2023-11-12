import styled from "styled-components";
import { Banner } from "./blocks/Banner";
import { Cover } from "./blocks/Cover";
import { Header } from "./blocks/Header";
import IntroToAperitifs from "./blocks/IntroToAperitifs";
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
      <Header />
      <Cover />

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
