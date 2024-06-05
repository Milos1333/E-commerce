import "./shoppingCart.style.css";
import Button from "../../components/Button/Button";

const ShoppingCartModal = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="shopping-cart-modal">
      <div className="shopping-cart-content">
        <h3>Cart</h3>
        <hr />
        <div className="cart-products"></div>
        <hr />
        <div className="cart-controls">
          <input placeholder="Promocode" />
          <Button buttonText="Apply" />
        </div>
        <div className="percent">
          <p>20% off discount</p>
        </div>
        <hr />
        <div className="subtotal">
          <h5>Subtotal</h5>
          <h5>$1646.00</h5>
        </div>
        <div className="discount">
          <p>Discount</p>
          <p>(20%) &nbsp;- $1244.00</p>
        </div>
        <div className="tax">
          <p>Tax</p>
          <p>+ 225$</p>
        </div>
        <hr />
        <div className="total">
          <h5>Total</h5>
          <h5>$1646.00</h5>
        </div>
        <div className="shopping-cart-buttons">
          <div className="checkout-button">
            <Button buttonText="Proceed to checkout" />
          </div>
          <div className="continue-shopping-button">
            <Button buttonText="Continue shopping" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartModal;
