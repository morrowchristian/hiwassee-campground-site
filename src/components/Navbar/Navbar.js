import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navbarStyle = {
    width: isMobile ? "70px" : "250px",
    backgroundColor: "#6B7280",
    color: "#F9F5EB",
    minHeight: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    padding: isMobile ? "20px 10px" : "30px 15px",
    boxShadow: "3px 0 8px rgba(0,0,0,0.2)",
    zIndex: "1000",
    transition: "width 0.3s ease",
  };

  const ulStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: isMobile && !isOpen ? "none" : "block",
  };

  const hamburgerStyle = {
    display: isMobile ? "flex" : "none",
    flexDirection: "column",
    cursor: "pointer",
    gap: "6px",
    alignItems: "center",
  };

  const liStyle = {
    marginBottom: "15px",
  };

  const linkStyle = {
    color: "#F9F5EB",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    padding: "10px 15px",
    display: "block",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
  };

  return (
    <nav style={navbarStyle}>
      <div style={{ marginBottom: isMobile ? "30px" : "50px" }}>
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/hiwassee-logo.png`}
            alt="Hiwassee Campground Logo"
            style={{
              height: "140px",
              width: "auto",
              marginBottom: isMobile ? "-30px" : "-50px",
              boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
              border: "3px solid #F9F5EB",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Link>
      </div>
      <div style={hamburgerStyle} onClick={toggleMenu}>
        <span
          style={{
            width: "30px",
            height: "4px",
            backgroundColor: "#F9F5EB",
            transition: "all 0.3s ease",
          }}
        ></span>
        <span
          style={{
            width: "30px",
            height: "4px",
            backgroundColor: "#F9F5EB",
            transition: "all 0.3s ease",
          }}
        ></span>
        <span
          style={{
            width: "30px",
            height: "4px",
            backgroundColor: "#F9F5EB",
            transition: "all 0.3s ease",
          }}
        ></span>
      </div>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A84435")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/about"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A84435")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            About
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/attractions"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A84435")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Attractions
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/rates"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A84435")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Rates
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/gallery"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A84435")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Gallery
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/book"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A84435")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Book Now
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/contact"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A84435")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Contact
          </Link>
        </li>
      </ul>
      <style>
        {`
          @media (max-width: 768px) {
            .navbar ul.active {
              display: flex;
              flex-direction: column;
              position: absolute;
              top: 180px;
              left: 70px;
              background: #6B7280;
              padding: 10px;
              width: 150px;
            }
            [data-page] {
              margin-left: 90px;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;