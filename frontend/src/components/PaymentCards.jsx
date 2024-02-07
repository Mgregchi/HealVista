import { Col, Card } from "react-bootstrap";
import PropTypes from "prop-types";

//Styles
import "../styles/PaymentPlan.css";

const PaymentCards = ({ title, description, imgUrl }) => {
  return (
    <Col className="g-4 custom">
      <Card className=" custom__card text-center h-100">
        <Card.Img src={imgUrl} className="custom__img" />
        <Card.Body className="custom__body">
          <Card.Title className="custom__title">{title}</Card.Title>
          <Card.Text className="custom__text">{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

PaymentCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default PaymentCards;
