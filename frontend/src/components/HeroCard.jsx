import { Card, Form, Row, Col } from "react-bootstrap";

//Styles
import "../styles/Hero.css";

const HeroCard = () => {
  return (
    <div className="banner-bottom-card">
      <Card className="my-3 text-center  hero__card">
        <Card.Body>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={5} lg={4} className="search__input mb-3 mb-md-0">
              <Form.Group controlId="searchKeyword">
                <Form.Label>Type Keyword</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex. Turkey or Kidney Transplant"
                  className="search__control"
                />
              </Form.Group>
            </Col>

            <Col xs={0} md={1} className="">
              <div className="vertical__line"></div>
            </Col>

            <Col
              xs={12}
              md={6}
              lg={5}
              className="d-flex align-items-center Radio__Buttons"
            >
              <Form.Group controlId="selectOptions" className="w-100">
                <Form.Label>Select Options</Form.Label>
                <div className="d-flex justify-content-center align-items-center">
                  <Form.Check
                    inline
                    label="All"
                    type="radio"
                    id="allOption"
                    name="options"
                    htmlFor="allOption"
                  />
                  <Form.Check
                    inline
                    label="Country"
                    type="radio"
                    id="countryOption"
                    name="options"
                    htmlFor="countryOption"
                  />
                  <Form.Check
                    inline
                    label="Treatment"
                    type="radio"
                    id="treatmentOption"
                    name="options"
                    htmlFor="treatmentOption"
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HeroCard;
