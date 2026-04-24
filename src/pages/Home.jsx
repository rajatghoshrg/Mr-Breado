import Hero from "../sections/Hero";
// import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import Partner from "../sections/Partner";
import Testimonials from "../sections/Testimonials";
// import Offer from "../sections/Offer";
import Deliverypartner from "../sections/Deliverypartner";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Offer /> */}
      {/* <Features /> */}
      <HowItWorks />
      <Deliverypartner />
      <Partner />
      <Testimonials />
    </>
  );
};

export default Home;
