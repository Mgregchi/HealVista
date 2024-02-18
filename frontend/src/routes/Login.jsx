import { Container } from "react-bootstrap";
import "/dist/Login.css";
import Avater from "../components/Avater";
import LoginCard from "../components/LoginCard";

const Login = () => {
  return (
     
    <Container className="login-wrapper px-5 px-md-0 py-5 py-md-0">
      <div className="row">
        <div className="headShot__wrapper">
          <Avater />
          <h1 className="text-center pt-3 pt-md-0">Welcome Back!</h1>
        </div>

        {/* <div className="background-decor">
          <div className="shape"></div>
          <div className="shape"></div>
        </div> */}

        <div className="login-wrapper__card">
          <LoginCard />
        </div>
      </div>
    </Container>
  );
};

export default Login;
