import "../styles/innovative.style.css";
import { HeadphoneImage2 } from "../../../assets/index";
import Button from "../../../components/Button/Button";

const Innovative = () => {
  return (
    <div className="innovative-container">
      <div className="innovative-main">
        <div className="innovative-text">
          <h2>Showcase Apps - your destination for innovative headphones.</h2>
          <p>
            You'll never be without your favorite headphones again! Sign up
            today and save money and time. Cancellation is possible at any time.
          </p>
          <Button
            buttonText="Order now"
            backgroundColor="rgb(0, 38, 33)"
            color="white"
          />
        </div>
      </div>
      <div className="innovative-image">
        <HeadphoneImage2 />
      </div>
    </div>
  );
};

export default Innovative;
