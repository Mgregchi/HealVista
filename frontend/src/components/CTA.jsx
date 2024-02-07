const Cta = () => {
  return (
    <div className="d-flex gap-4 btn__cta">
      <button
        type="button"
        value="Input"
        size="md"
        onClick={() => console.log("Connect")}
        className=" btn__in btn__signup"
      >
        Signup
      </button>{" "}
      <button
        size="md"
        onClick={() => console.log("Connect")}
        className=" btn__in "
      >
        Login
      </button>{" "}
    </div>
  );
};

export default Cta;
