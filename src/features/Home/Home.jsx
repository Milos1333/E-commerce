import "./home.style.css";
import Unleash from "./components/Unleash";
import Presentations from "./components/Presentations";
import Innovative from "./components/Innovative";
import Packages from "./components/Packages";
import Product from "./components/Product";
import Clients from "./components/Clients";
import Copyright from "./components/Copyright";

const Home = () => {
  return (
    <div className="home-page">
      <Unleash />
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
