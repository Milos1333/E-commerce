import "../styles/packages.style.css";
import Button from "../../../components/Button/Button";
import headphoneSimple from "../../../assets/headphoneSimple.png";
import headphoneStandard from "../../../assets/headphoneStandard.png";
import headphoneBestOffer from "../../../assets/headphoneBestOffer.png";

const Packages = () => {
  const headphones = [
    {
      title: "Simple",
      description: "Security Device with Monthly Service",
      price: "$19",
      image: headphoneSimple,
    },
    {
      title: "Standard",
      description: "Security Device with Monthly Service",
      price: "$29",
      image: headphoneStandard,
    },
    {
      title: "Best Offer",
      description: "Security Device with Monthly Service",
      price: "$39",
      image: headphoneBestOffer,
    },
  ];
  return (
    <div className="packages-container">
      <div className="packages-header">
        <h2>Our Packages</h2>
      </div>
      <div className="packages-main">
        {headphones.map((headphone) => (
          <div className="package">
            <img src={headphone.image} width="165px" />
            <h3>{headphone.title}</h3>
            <p>{headphone.description}</p>
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
  );
};

export default Packages;
