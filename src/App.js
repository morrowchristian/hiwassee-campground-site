import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Import page components
import Home from "./pages/Home";
import About from "./pages/About";
import Attractions from "./pages/Attractions";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Rates from "./pages/Rates";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rates" element={<Rates />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;