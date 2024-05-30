import headphone1 from "./headphone1.png";
import headphone2 from "./headphone2.png";
import shoppingCart from "./shoppingCart.png";
import menuIcon from "./menu.png";
import aboutTeamImg from "./aboutTeamImg.jpg";
import aboutOurMissionImg from "./aboutOurMissionImg.jpg";
import aboutOurStoryImg from "./aboutOurStoryImg.jpg";

const HeadphoneImage1 = () => {
  return <img src={headphone1} alt="Headphone" />;
};

const HeadphoneImage2 = () => {
  return <img src={headphone2} alt="Headphone" />;
};

const ShoppingCartImage = () => {
  return <img src={shoppingCart} alt="Shopping Cart" width="18px" />;
};

const MenuImage = () => {
  return <img src={menuIcon} alt="Menu Hamburger" width="22px" />;
};

const AboutTeamImg = () => {
  return <img src={aboutTeamImg} alt="Team Galaxia Marketing" width="360px" />;
};

const AboutOurMissionImg = () => {
  return <img src={aboutOurMissionImg} alt="Our Mission" width="380px" />;
};

const AboutOurStoryImg = () => {
  return <img src={aboutOurStoryImg} alt="Our Story" width="380px" />;
};

export {
  HeadphoneImage1,
  HeadphoneImage2,
  ShoppingCartImage,
  MenuImage,
  AboutTeamImg,
  AboutOurMissionImg,
  AboutOurStoryImg,
};
