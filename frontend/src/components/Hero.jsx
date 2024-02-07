import { Col, Container, Row } from "react-bootstrap";
import GroupDoctor from "../assets/doctors.svg";
import HeroCard from "./HeroCard";

//Styles
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="align-items-center hero">
      <Container>
        <Row className="d-flex align-items-center py-5 hero__row">
          <Col lg={8} md={12} className="text-center text-lg-start hero__text">
            <h1 className="hero__title">
              Journey to
              <br />
              <span className="h">
                {" "}
                Wellness <br /> Across Borders
              </span>
            </h1>
            <p className="mt-4 w-50  hero__subtitle">
              HealVista is your Gateway to Seamless Global Healthcare Access. We
              are Bridging Gaps, Breaking Barriers to healthcare anywhere in the
              world.
            </p>
          </Col>
          <Col lg={7} md={12} className=" hero__image">
            <img src={GroupDoctor} alt="hero__image" className=" w-75 " />
          </Col>
        </Row>
        <Row>
          <HeroCard />
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
