import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar.jsx";
import Home from "./components/home/home.jsx";

import CurtainsFurnishings from "./components/Pages/CurtainsFurnishings";
import Mattresses from "./components/Pages/Mattresses";
import DecorativePanels from "./components/Pages/DecorativePanels";
import WallSurfacesCladding from "./components/Pages/WallSurfacesCladding";
import FlooringSolutions from "./components/Pages/FlooringSolutions";
import HomeFurnishingMaterials from "./components/Pages/HomeFurnishingMaterials";
import Contact from "./components/Pages/Contact";
import Aboutus from "./components/Pages/Aboutus";
import Faqs from "./components/Pages/Faqs";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/curtains-furnishings" element={<CurtainsFurnishings />} />
        <Route path="/mattresses" element={<Mattresses />} />
        <Route path="/decorative-panels" element={<DecorativePanels />} />
        <Route path="/wall-surfaces-cladding" element={<WallSurfacesCladding />} />
        <Route path="/flooring-solutions" element={<FlooringSolutions />} />
        <Route path="/home-furnishing-materials" element={<HomeFurnishingMaterials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/home" element={<Home />} />

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
