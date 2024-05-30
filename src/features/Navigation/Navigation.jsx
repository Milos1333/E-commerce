import "./navigation.style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import EcommerceLogo from "../../components/EcommerceLogo/EcommerceLogo";
import { MenuImage } from "../../assets/index";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const hideShoppingCart = location.pathname !== "/";

  return (
    <div
      className={`navigation-container ${
        hideShoppingCart ? "" : "addition-navigation"
      }`}
    >
      <div className="navigation-logo" onClick={handleNavigate}>
        <EcommerceLogo />
      </div>
      <div className="navigation-links">
        <div className="navigation-link">
          <Link to="/" onClick={handleNavigate}>
            Home
          </Link>
          <Link to="/offer">Offer</Link>
          <Link to="/how-to-order">How to order?</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="navigation-icons">
        <div className="navigation-menu-hamburger">
          <MenuImage />
        </div>
        <div
          className="shopping-cart-container"
          style={{ visibility: hideShoppingCart ? "visible" : "hidden" }}
        >
          <ShoppingCart />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
