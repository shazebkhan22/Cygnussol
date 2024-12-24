import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import CaseStudiesCard from "./components/CaseStudiesCard";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/casestudies/:id" element={<CaseStudiesCard />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
