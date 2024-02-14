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
      <WhyChooseUs />
      <div className="services__bg-overlay"></div>
      <div class="custom-shape-divider-top-1707922753">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Services;
