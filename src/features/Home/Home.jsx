import "./home.style.css";
import Fresh from "./components/Fresh";
import Presentations from "./components/Presentations";
import Innovative from "./components/Innovative";
import Packages from "./components/Packages";
import Product from "./components/Product";
import Clients from "./components/Clients";
import Copyright from "./components/Copyright";

const Home = () => {
  return (
    <div className="home-page">
      <Fresh />
      <Presentations />
      <Innovative />
      <Packages />
      <Product />
      <Clients />
      <Copyright />
    </div>
  );
};

export default Home;
