import "../styles/products.style.css";
import { getAllItems } from "../../../assets/itemsdata";
import Button from "../../../components/Button/Button";
import { StarsImg } from "../../../assets";

const Products = () => {
  const products = getAllItems();
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="product">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-header">
            <h2>{product.name}</h2>
            <p>
              <sup>$</sup>
              {product.price}
              <sup>00</sup>
            </p>
          </div>
          <div className="product-description">
            <p>{product.description}</p>
          </div>
          <div className="users-review">
            <div className="stars">
              <StarsImg />
            </div>
            <p>({product.reviews})</p>
          </div>
          <Button buttonText="Add to Cart" />
        </div>
      ))}
    </>
  );
};

export default Products;
