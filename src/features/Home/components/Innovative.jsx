import "../styles/innovative.style.css";
import { HeadphoneImage2 } from "../../../assets/index";
import Button from "../../../components/Button/Button";

const Innovative = () => {
  return (
    <div className="innovative-container">
      <div className="innovative-left">
        <div className="innovative-main">
          <h2>Showcase Apps - your destination for innovative headphones.</h2>
          <p>
            You'll never be without your favorite headphones again! Sign up
            today and save money and time. Cancellation is possible at any time.
          </p>
          <Button buttonText="Order now" />
        </div>
      </div>
      <div className="innovative-right">
        <HeadphoneImage2 />
      </div>
    </div>
  );
};

export default Innovative;
