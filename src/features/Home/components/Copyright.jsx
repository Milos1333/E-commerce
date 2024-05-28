import "../styles/copyright.style.css";
import Button from "../../../components/Button/Button";
import { HeadphoneImage1 } from "../../../assets";

const Copyright = () => {
  return (
    <div className="copyright-main-container">
      <div className="copyright-container">
        <div className="copyright-content">
          <div className="copyright-text">
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
          <div className="copyright-image">
            <HeadphoneImage1 />
          </div>
        </div>
        <p>
          Copyright &copy; domainname.com. All Rights Reserved | Designed by:
          Milos Klepic
        </p>
      </div>
    </div>
  );
};

export default Copyright;
