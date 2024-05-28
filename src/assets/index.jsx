import headphone1 from "./headphone1.png";
import headphone2 from "./headphone2.png";
import logoFavicon from "./logoFavicon.png";
import shoppingCart from "./shoppingCart.png";
import menuIcon from "./menu.png";

const HeadphoneImage1 = () => {
  return <img src={headphone1} alt="Headphone" />;
};

const HeadphoneImage2 = () => {
  return <img src={headphone2} alt="Headphone" />;
};

const LogoFavicon = () => {
  return <img src={logoFavicon} alt="Logo Favicon" />;
};

const ShoppingCartImage = () => {
  return <img src={shoppingCart} alt="Shopping Cart" width="18px" />;
};

const MenuImage = () => {
  return <img src={menuIcon} alt="Menu Hamburger" width="20px" />;
};

export {
  HeadphoneImage1,
  HeadphoneImage2,
  LogoFavicon,
  ShoppingCartImage,
  MenuImage,
};
