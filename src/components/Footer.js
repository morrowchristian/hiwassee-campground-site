import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container className="text-center">
        {/* Branding / Copyright */}
        <p className="mb-1">
          &copy; {new Date().getFullYear()} Hiwassee Campground RV Resort
        </p>
        <small className="d-block mb-2">
          123 River Rd, Reliance, TN | (555) 123-4567
        </small>

        {/* Quick links */}
        <div>
          <Link to="/about" className="text-light text-decoration-none me-3">
            About
          </Link>
          <Link to="/rates" className="text-light text-decoration-none me-3">
            Rates
          </Link>
          <Link to="/contact" className="text-light text-decoration-none me-3">
            Contact
          </Link>
          <Link to="/book" className="text-light text-decoration-none">
            Book Now
          </Link>
        </div>
      </Container>
    </footer>
  );
}
