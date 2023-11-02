import styled from "styled-components";
import { Banner } from "./blocks/Banner";
import { Cover } from "./blocks/Cover";
import { Header } from "./blocks/Header";

const Wrapper = styled.div`
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <Banner message="Free shipping on orders over $50"></Banner>
      <Header />
      <Cover />
    </Wrapper>
  );
}

export default App;
