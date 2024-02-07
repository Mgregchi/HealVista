import { Col, Container, Row } from "react-bootstrap";
import LadyDoctor from "../assets/LadyDoctor.jpg";
import Lines from "../assets/Lines.svg";

//Styles
import "../styles/Booking.css";

const Booking = () => {
  return (
    <section id="booking" className="booking">
      <Container>
        <Row>
          <Col>
            <h2 className="booking__heading">
              providing the best services in medical tourism
            </h2>
          </Col>
        </Row>
        <Row className=" align-items-center booking__row">
          <Col md={6} lg={8} className="mb-4">
            <h1 className="booking__title">
              book a free <br /> consultation
            </h1>
            <h3 className="booking__text">
              Start Your Health <br /> Journey: Book a Free <br /> Consultation
            </h3>
            <button className="booking__cta">
              <a href="#">Book a consultation</a>
            </button>
            <img src={Lines} alt="lines" className="booking__line" />
          </Col>
          <Col md={6} lg={4} className="booking__image">
            <img src={Lines} alt="lines" className="booking__line2" />
            <img src={LadyDoctor} alt="Lady Doctor" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Booking;
