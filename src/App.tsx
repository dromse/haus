import styled from "styled-components";
import { Banner } from "./blocks/Banner";
import Benefits from "./blocks/Benefits";
import CustomerReviews from "./blocks/CustomerReviews";
import FollowUs from "./blocks/FollowUs";
import Footer from "./blocks/Footer";
import { Hero } from "./blocks/Hero";
import IntroToAperitifs from "./blocks/IntroToAperitifs";
import { Navbar } from "./blocks/Navbar";
import { Products } from "./blocks/Products";
import { Testimonials } from "./blocks/Testimonials";
import WhyChooseUs from "./blocks/WhyChooseUs";
import Container from "./components/Container";
import Divider from "./components/Divider";

const Wrapper = styled.div`
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <Banner message="Free shipping on orders over $50"></Banner>
      <Navbar />
      <Hero />

      <Container>
        <Testimonials />
        <Divider />
        <Products />
        <Divider />
        <IntroToAperitifs />
        <Divider />
        <Benefits />
      </Container>

      <CustomerReviews />

      <Container>
        <WhyChooseUs />
      </Container>

      <FollowUs />
      <Footer />
    </Wrapper>
  );
}

export default App;
