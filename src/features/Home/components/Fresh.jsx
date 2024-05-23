import "../styles/fresh.style.css";
import Button from "../../../components/Button/Button";
import {
  ConsumerReportsLogo,
  EndagdetLogo,
  HeadphoneImage,
  PioneerLogo,
  WiredLogo,
  XperiaLogo,
} from "../../../assets/index";

const Fresh = () => {
  return (
    <div className="fresh-container">
      <div className="fresh-main">
        <div className="fresh-content">
          <h1>
            Fresh Beautiful
            <br />
            Innovative
          </h1>
          <hr />
          <p>
            Discover unmatched sound quality with our cutting-edge headphones.
            Perfect for any setting, they offer exceptional comfort and audio
            performance. Order now to elevate your listening experience.
          </p>
          <Button
            buttonText="Order now"
            backgroundColor="rgb(0, 38, 33)"
            color="white"
          />
        </div>
        <div className="fresh-image">
          <HeadphoneImage />
        </div>
      </div>
      <div className="fresh-brands">
        <ul>
          <li>
            <ConsumerReportsLogo />
          </li>
          <li>
            <EndagdetLogo />
          </li>
          <li>
            <PioneerLogo />
          </li>
          <li>
            <WiredLogo />
          </li>
          <li>
            <XperiaLogo />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Fresh;
