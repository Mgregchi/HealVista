import { Container } from "react-bootstrap";
import "/dist/Login.css";
import Avater from "../components/Avater";
import LoginCard from "../components/LoginCard";

const Login = () => {
  return (
    <Container className="login-wrapper">
      <div className="row">
        <div className="headShot__wrapper">
          <Avater />
          <h1></h1>
        </div>
      
          <div className="background-decor">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <div className="login-wrapper__card">
            <LoginCard />
          </div>
       
      </div>
    </Container>
  );
};

export default Login;
