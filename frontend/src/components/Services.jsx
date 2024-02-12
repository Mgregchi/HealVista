import "../styles/Services.scss";
import ServicesCards from "./services/ServicesCards";
import WhyChooseUs from "./services/WhyChooseUs";

function Services() {
  return (
    <div className="services">
      <div className="services__heading">
        <h5 className="services__heading__title">SERVICES</h5>
        <h2 className="services__heading__subtitle">
          TREATMENT AT YOUR FINGERTIPS
        </h2>
      </div>
      <ServicesCards />
      <WhyChooseUs/>
      <div className="services__bg-overlay"></div>
    </div>
  );
}

export default Services;
