import "./navigation.style.css";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import EcommerceLogo from "../../components/EcommerceLogo/EcommerceLogo";

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("../");
  };

  return (
    <div className="navigation-container">
      <div className="navigation-logo">
        <EcommerceLogo handleNavigate={handleNavigate} />
      </div>
      <div className="navigation-links">
        <Link to="/">Home</Link>
        <Link to="/offer">Offer</Link>
        <Link to="/how-to-order">How to order?</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="shopping-cart-container">
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Navigation;
