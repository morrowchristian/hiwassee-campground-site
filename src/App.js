import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Attractions from "./pages/Attractions";
import Rates from "./pages/Rates";
import Gallery from "./pages/Gallery";
import Book from "./pages/Book";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#F9F5EB', fontFamily: 'Poppins, sans-serif', display: 'flex' }}>
        <Navbar />
        <main style={{ flex: '1', padding: '20px', marginLeft: '220px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;