import "./navigation.style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import EcommerceLogo from "../../components/EcommerceLogo/EcommerceLogo";
import { MenuImage } from "../../assets/index";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    navigate("../");
  };

  const hideShoppingCart = location.pathname !== "/";

  return (
    <div className="navigation-container">
      <div className="navigation-logo">
        <EcommerceLogo handleNavigate={handleNavigate} />
      </div>
      <div
        className={`navigation-links ${
          hideShoppingCart ? "" : "addition-navigation-links"
        }`}
      >
        <div className="navigation-link">
          <Link to="/">Home</Link>
          <Link to="/offer">Offer</Link>
          <Link to="/how-to-order">How to order?</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div
          className={`navigation-menu ${
            hideShoppingCart ? "" : "addition-navigation-menu"
          }`}
        >
          <MenuImage />
        </div>
      </div>
      {hideShoppingCart && (
        <div className="shopping-cart-container ">
          <ShoppingCart />
        </div>
      )}
    </div>
  );
};

export default Navigation;
