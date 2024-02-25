import Benefits from "../blocks/Benefits";
import CustomerReviews from "../blocks/CustomerReviews";
import FollowUs from "../blocks/FollowUs";
import { Hero } from "../blocks/Hero";
import IntroToAperitifs from "../blocks/IntroToAperitifs";
import { Products } from "../blocks/Products";
import { Testimonials } from "../blocks/Testimonials";
import WhyChooseUs from "../blocks/WhyChooseUs";
import Container from "../components/Container";
import Divider from "../components/Divider";

function Home() {
  return (
    <main>
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
    </main>
  );
}

export default Home;
