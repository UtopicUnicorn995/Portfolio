import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import FixedIcons from "./components/FixedIcons";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <FixedIcons />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
