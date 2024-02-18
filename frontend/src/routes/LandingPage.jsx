import Booking from "../components/Booking";
import Donate from "../components/Donate";
import Hero from "../components/Hero";
import PaymentPlan from "../components/PaymentPlan";
import Services from "../components/Services";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services/>
      <PaymentPlan />
      <Booking />
      <Donate />
    </div>
  );
};

export default LandingPage;
