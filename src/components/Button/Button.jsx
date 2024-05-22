const Button = ({ handleButton, backgroundColor, color, buttonText }) => {
  return (
    <>
      <button
        className="button"
        onClick={handleButton}
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
