import { Route, Routes } from "react-router-dom";
import Home from "./models/Home";
import About from "./models/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./models/Service";
import Login from "./models/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        {/* <Route path="" element/> */}
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
