import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="d-flex gap-4 btn__cta">
      <Link to="./SignUp">
        <button
          type="button"
          value="Input"
          size="md"
          className=" btn__in btn__signup"
        >
          Signup
        </button>
      </Link>
      <Link to="./Login">
        <button size="md" className=" btn__in ">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Cta;
