import "../styles/product.style.css";
import Button from "../../../components/Button/Button";

const Product = () => {
  const features = [
    { title: "High-quality sound for an immersive experience" },
    { title: "Noise-canceling technology to reduce ambient noise" },
    { title: "Comfortable fit for long listening sessions" },
    { title: "Wireless connectivity with long battery life" },
    { title: "Built-in microphone for hands-free calls" },
    { title: "Durable and stylish design, crafted with premium materials" },
  ];
  return (
    <div className="product-container">
      <div className="product-information">
        <h2>Product Information</h2>
        <div className="email-subscription-form">
          <input placeholder="Enter Your Email Here" />
          <Button
            buttonText="Get Product Information"
            backgroundColor="rgb(0, 255, 145)"
          />
        </div>
      </div>
      <div className="product-content">
        <h2>Feature your best sellers.</h2>
        <div className="product-title">
          <p>
            Discover the ultimate audio experience with our top-of-the-line
            headphones. Designed for audiophiles and casual listeners alike, our
            headphones provide crystal-clear sound quality, exceptional comfort,
            and advanced features to enhance your listening pleasure. Whether
            you're at home, in the office, or on the go, our headphones deliver
            unparalleled performance and style.
          </p>
        </div>
        <div className="features">
          {features.map((feature) => (
            <div className="feature">
              <span>&#10003;</span>
              <ul>
                <li>{feature.title}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
