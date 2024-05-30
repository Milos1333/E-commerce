import "../styles/unleash.style.css";
import Button from "../../../components/Button/Button";
import consumerReportsLogo from "../../../assets/consumerReportsLogo.png";
import endagdetLogo from "../../../assets/endagdetLogo.png";
import pioneerLogo from "../../../assets/pioneerLogo.png";
import wiredLogo from "../../../assets/wiredLogo.png";
import xperiaLogo from "../../../assets/xperiaLogo.png";
import { HeadphoneImage1 } from "../../../assets";

const Unleash = () => {
  const brands = [
    { image: consumerReportsLogo },
    { image: endagdetLogo },
    { image: pioneerLogo },
    { image: wiredLogo },
    { image: xperiaLogo },
  ];
  return (
    <div className="unleash-main-container">
      <div className="unleash-container">
        <div className="unleash-main">
          <div className="unleash-content">
            <h1>Unleash Your Gaming Potential</h1>
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
          <div className="unleash-image">
            <HeadphoneImage1 />
          </div>
        </div>
        <div className="unleash-brands">
          {brands.map((brand) => (
            <ul>
              <li>
                <img src={brand.image} />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Unleash;
