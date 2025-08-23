// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
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
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
