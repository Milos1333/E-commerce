import "./home.style.css";
import Fresh from "./components/Fresh";
import Presentations from "./components/Presentations";

const Home = () => {
  return (
    <div className="home-page">
      <Fresh />
      <Presentations />
    </div>
  );
};

export default Home;
