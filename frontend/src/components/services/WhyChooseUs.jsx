import "../../styles/ChooseUs.scss";
const WhyChooseUs = () => {
  return (
    <section style={{ width: "100%" }}>
      <div className="container choose-us">
        <div className="choose-us__left-content">
          <div className="top-image"></div>
          <div className="bottom-image"></div>
        </div>
        <div className="choose-us__right-content">
          <h5 className="title">WHY CHOOSE US</h5>
          <h3 className="subtitle">MEDICAL TOURISM MADE EASY</h3>

          <ul className="services-list">
            <div className="services-list__container1">
              <li className="services-list__item">Free Medical Consultation</li>
              <li className="services-list__item">Health Visa Processing</li>
              <li className="services-list__item">Follow-Up And Care</li>
              <li className="services-list__item">Travel Logistics</li>
            </div>
            <div className="services-list__container2">
              <li className="services-list__item">
                Best Globe Medical Services
              </li>
              <li className="services-list__item">Payment Packages</li>
              <li className="services-list__item">Less Waiting Time</li>
              <li className="services-list__item">Insurance Coverage</li>
            </div>
          </ul>

          <button className="choose-us__button">
            <p>Know More</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
