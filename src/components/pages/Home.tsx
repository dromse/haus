import Benefits from "@components/blocks/Benefits";
import CustomerReviews from "@components/blocks/CustomerReviews";
import FollowUs from "@components/blocks/FollowUs";
import { Hero } from "@components/blocks/Hero";
import IntroToAperitifs from "@components/blocks/IntroToAperitifs";
import { Products } from "@components/blocks/Products";
import { Testimonials } from "@components/blocks/Testimonials";
import WhyChooseUs from "@components/blocks/WhyChooseUs";
import Container from "@components/reusable/Container";
import Divider from "@components/reusable/Divider";

export default function Home(): React.JSX.Element {
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
