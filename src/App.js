import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import FixedIcons from "./components/FixedIcons";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavigationBar />
      <FixedIcons />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
