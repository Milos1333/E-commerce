import "../styles/packages.style.css";
import Button from "../../../components/Button/Button";
import headphoneSimple from "../../../assets/headphoneSimple.png";
import headphoneStandard from "../../../assets/headphoneStandard.png";
import headphoneBestOffer from "../../../assets/headphoneBestOffer.png";

const Packages = () => {
  const headphones = [
    {
      title: "Simple",
      description: "Basic sound quality, essential features.",
      price: "$19",
      image: headphoneSimple,
    },
    {
      title: "Standard",
      description: "Enhanced audio, balanced performance.",
      price: "$29",
      image: headphoneStandard,
    },
    {
      title: "Best Offer",
      description: "Premium sound, best value deal.",
      price: "$39",
      image: headphoneBestOffer,
    },
  ];
  return (
    <div className="packages-main-container">
      <div className="packages-container">
        <div className="packages-header">
          <h2>Our Packages</h2>
        </div>
        <div className="packages">
          {headphones.map((headphone) => (
            <div className="package">
              <img src={headphone.image} width="165px" />
              <h3>{headphone.title}</h3>
              <div className="title-headphone">
                <p>{headphone.description}</p>
              </div>
              <h2>{headphone.price}</h2>
              <Button
                buttonText="Shop now"
                backgroundColor="rgb(0, 38, 33)"
                color="white"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
