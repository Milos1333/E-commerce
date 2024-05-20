import "./App.css";
import Navigation from "./features/Navigation/Navigation";
import Contact from "./features/Contact/Contact";
import Offer from "./features/Offer/Offer";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import HowOrder from "./features/HowOrder/HowOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="offer" element={<Offer />} />
          <Route path="/how-to-order" element={<HowOrder />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
