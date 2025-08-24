import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Rates from "./pages/Rates";
import Gallery from "./pages/Gallery";
import Attractions from "./pages/Attractions";
import Contact from "./pages/Contact";
import Book from "./pages/Book";

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </Router>
  );
}
