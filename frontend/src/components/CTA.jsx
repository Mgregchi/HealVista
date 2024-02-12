// import { Link } from "react-scroll";
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <div className="d-flex gap-4 btn__cta">
      <Link to="./SignUp">
        <button
          type="button"
          value="Input"
          size="md"
          // onClick={() => console.log("Connect")}
          className=" btn__in btn__signup"
        >
          Sign Up
        </button>
      </Link>{" "}
      <Link to="./Login">
        <button
          size="md"
          // onClick={() => console.log("Connect")}
          className=" btn__in "
        >
          Login
        </button>{" "}
      </Link>
    </div>
  );
};

export default Cta;
