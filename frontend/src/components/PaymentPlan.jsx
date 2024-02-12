import { Col, Container, Row } from "react-bootstrap";
import Calendar from "../assets/Calendar.svg";
import Clock from "../assets/Clock.svg";
import PaymentCards from "./PaymentCards";

//Styles
import "../styles/PaymentPlan.css";

const PaymentPlan = () => {
  const contents = [
    {
      title: "Essential Care",
      description:
        "Get basic health support with Essential Care. You choose where to go, get quick appointments, and pay flexibly. It's simple and keeps you feeling good.",
      imgUrl: Calendar,
    },
    {
      title: "Premium Wellness",
      description:
        "Upgrade your health with Premium Wellness. More places to choose from, faster appointments, and extra benefits. Clear costs and payment plans for a smooth journey.",
      imgUrl: Clock,
    },
    {
      title: "Ultimate Health",
      description:
        "Experience top-notch health with Ultimate Health. Pick premium destinations, get VIP appointments, and enjoy exclusive perks. Clearly priced with flexible payments for your best health journey.",
      imgUrl: Calendar,
    },
  ];

  return (
    <section id="payment__plan" className="payment__plan">
      <Container>
        <Row className="payment__plan__container">
          <Col xs={12} className=" payment__plan__header text-center">
            <h3 className="payment__plan__header1">choose a payment plan</h3>
            <h1 className="payment__plan__header2">
              financial freedom <br />
              in healthcare
            </h1>
            <h6 className="payment__plan__subhead">
              Tailored payment plans for every budget{" "}
            </h6>
          </Col>
        </Row>
        <Row className="payment__plan__cards" md={2} lg={3}>
          {contents.map((content, index) => {
            return <PaymentCards key={index} {...content} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default PaymentPlan;
