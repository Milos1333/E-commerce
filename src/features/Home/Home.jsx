import "./Home.style.css";
import HeadphoneImage from "../../assets/headphone.png";
import Button from "../../components/Button/Button";
import ConsumerReportsLogo from "../../assets/HeadphoneSpecifications/ConsumerReportsLogo.png";
import WiredLogo from "../../assets/HeadphoneSpecifications/WiredLogo.png";
import XperiaLogo from "../../assets/HeadphoneSpecifications/XperiaLogo.png";
import EndagdetLogo from "../../assets/HeadphoneSpecifications/EndagdetLogo.png";
import PioneerLogo from "../../assets/HeadphoneSpecifications/PioneerLogo.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-main">
        <div className="home-content">
          <h1>
            Fresh Beautiful.
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
        <div className="home-image">
          <img src={HeadphoneImage} width="400px" />
        </div>
      </div>
      <div className="home-brands">
        <ul>
          <li>
            <img src={ConsumerReportsLogo} width="120px" />
          </li>
          <li>
            <img src={XperiaLogo} width="120px" />
          </li>
          <li>
            <img src={WiredLogo} width="120px" />
          </li>
          <li>
            <img src={PioneerLogo} width="120px" />
          </li>
          <li>
            <img src={EndagdetLogo} width="120px" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
