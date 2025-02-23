import { Route, Routes } from "react-router-dom";
import Home from "./models/Home";
import About from "./models/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./models/Service";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
