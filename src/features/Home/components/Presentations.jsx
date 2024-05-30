import "../styles/presentations.style.css";
import easyToUseImg from "../../../assets/easyToUseImg.png";
import freeUpdatesImg from "../../../assets/freeUpdatesImg.png";
import trendyDesignImg from "../../../assets/trendyDesignImg.png";

const Presentations = () => {
  const items = [
    {
      img: trendyDesignImg,
      title: "TRENDY DESIGN",
      description:
        "Stay stylish with our sleek headphone design. From the gym to the street, our stylish headphones combine style and functionality.",
    },
    {
      img: freeUpdatesImg,
      title: "FREE UPDATES",
      description:
        "Stay ahead with our regular free updates, ensuring your headphones always have the latest features and enhancements.",
    },
    {
      img: easyToUseImg,
      title: "EASY TO USE",
      description:
        "Designed with intuitive controls and effortless connectivity, our headphones make your listening experience seamless and enjoyable.",
    },
  ];
  return (
    <div className="presentations-main-container">
      <div className="presentations-container">
        <div className="presentations-header">
          <h2>Beautiful presentations made easy.</h2>
          <p>
            Dive into mesmerizing soundscapes with our advanced headphones,
            offering rich audio quality from highs to lows for a captivating
            listening journey.
          </p>
        </div>
        <div className="presentations-main">
          {items.map((item, index) => (
            <div key={index} className="presentations-item">
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentations;
