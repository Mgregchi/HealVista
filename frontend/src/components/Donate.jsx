import { Container, Row } from "react-bootstrap";

//Styles
import "../styles/Donate.css";

const Donate = () => {
  return (
    <Container>
      <section id="donate" className="donate">
        <Row className="donate__text">
          <h1 className="donate__title">Make a Difference in Health Equity</h1>
          <p className="donate__subtitle">
            Your voluntary donations empower us to provide essential medical
            care to underprivileged communities with limited access to
            healthcare. Join us in fostering better health outcomes. Every
            contribution counts. Together, let us build a healthier world.
            Donate Now
          </p>
        </Row>
        <button className="donate__cta">
          <a href="#">Donate</a>
        </button>
      </section>
    </Container>
  );
};

export default Donate;
