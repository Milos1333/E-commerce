import "./navigation.style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import EcommerceLogo from "../../components/EcommerceLogo/EcommerceLogo";
import { MenuImage } from "../../assets/index";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ShoppingCartImg from "../../components/ShoppingCart/ShoppingCartImg";
import { useState } from "react";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  const handleNavigate = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const hideShoppingCart = location.pathname !== "/";

  const toggleShoppingCart = () => {
    setIsShoppingCartOpen(!isShoppingCartOpen);
  };

  return (
    <div className="navigation-container">
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
          onClick={toggleShoppingCart}
        >
          <ShoppingCartImg />
          <span>0</span>
        </div>
      </div>
      <ShoppingCart isOpen={isShoppingCartOpen} />
    </div>
  );
};

export default Navigation;
