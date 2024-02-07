import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

//Styles
import "../styles/Footer.css";

const NewsLetterForm = () => {
  const [email, setEmail] = useState("");

  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    setSubscribed(true);

    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 1000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Form
      className="mb-3 newsletter"
      id="newsletter"
      onSubmit={handleSubscribe}
    >
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Your Email"
          type="email"
          name="email"
          autoComplete="off"
          required
          value={email}
          onChange={handleEmailChange}
          className="newsletter__form"
        />
        <Button
          variant="outline-secondary"
          type="submit"
          className="subscribe__btn"
        >
          Subscribe
        </Button>
      </InputGroup>
      {subscribed && <p className="text-success">Thank you for subscribing!</p>}
    </Form>
  );
};

export default NewsLetterForm;
