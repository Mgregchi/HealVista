import { Col, Container, Row } from "react-bootstrap";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import NewsLetterForm from "./NewsLetterForm";

//Styles
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="justify-content-center py-5 footer__info">
          <Col className="footer__socials" md={6} lg={4}>
            <p>1429 Something Bridge, LA 4281</p>
            <p>Call: (321) 428 321 3902</p>
            <div className="footer__social g-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedln.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
          <Col md={6} lg={2}>
            <h5>
              <b>Explore</b>
            </h5>
            <ul className="quicklinks">
              <li>
                <a href="#">Treatment</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={2}>
            <h5>
              <b>Legal</b>
            </h5>
            <ul className="quicklinks">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Services</a>
              </li>
              <li>
                <a href="#">Documentations</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={4} className="footer__subscription">
            <h5>
              <b>Subscribe</b>
            </h5>
            <p>
              Subscribe to get the latest <br /> news from us
            </p>
            <NewsLetterForm />
          </Col>
        </Row>
        <div className="footer__copyright col-12 text-center py-3">
          <small>
            {" "}
            &copy; {new Date().getFullYear()} HealVista All Rights Reserved
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
