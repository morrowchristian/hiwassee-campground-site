// Navbar.js
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link to="/">Hiwassee Campground</Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.links} ${isOpen ? styles.active : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/attractions" onClick={toggleMenu}>Attractions</Link></li>
        <li><Link to="/rates" onClick={toggleMenu}>Rates</Link></li>
        <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
        <li><Link to="/book" onClick={toggleMenu}>Book Now</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
