import "./home.style.css";
import Fresh from "./components/Fresh";
import Presentations from "./components/Presentations";
import Innovative from "./components/Innovative";
import Packages from "./components/Packages";

const Home = () => {
  return (
    <div className="home-page">
      <Fresh />
      <Presentations />
      <Innovative />
      <Packages />
    </div>
  );
};

export default Home;
