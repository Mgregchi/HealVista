import Booking from "../components/Booking";
import Donate from "../components/Donate";
import Hero from "../components/Hero";
import PaymentPlan from "../components/PaymentPlan";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <PaymentPlan />
      <Booking />
      <Donate />
    </div>
  );
};

export default LandingPage;
