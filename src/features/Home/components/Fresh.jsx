import "../styles/fresh.style.css";
import Button from "../../../components/Button/Button";
import consumerReportsLogo from "../../../assets/consumerReportsLogo.png";
import endagdetLogo from "../../../assets/endagdetLogo.png";
import pioneerLogo from "../../../assets/pioneerLogo.png";
import wiredLogo from "../../../assets/wiredLogo.png";
import xperiaLogo from "../../../assets/xperiaLogo.png";
import { HeadphoneImage1 } from "../../../assets";

const Fresh = () => {
  const brands = [
    { image: consumerReportsLogo },
    { image: endagdetLogo },
    { image: pioneerLogo },
    { image: wiredLogo },
    { image: xperiaLogo },
  ];
  return (
    <div className="fresh-container">
      <div className="fresh-main">
        <div className="fresh-content">
          <h1>Fresh Beautiful. Innovative.</h1>
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
          <HeadphoneImage1 />
        </div>
      </div>
      <div className="fresh-brands">
        {brands.map((brand) => (
          <ul>
            <li>
              <img src={brand.image} />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Fresh;
