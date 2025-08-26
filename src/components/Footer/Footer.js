import styles from "./Footer.module.css"; // Scoped styles for Footer

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Hiwassee Campground RV Resort</p>
      <p>123 River Rd, Hiwassee, TN | (555) 123-4567</p>
      <p>
        <a href="/contact">Contact Us</a> | 
        <a href="/book"> Book a Stay</a>
      </p>
    </footer>
  );
}

export default Footer;
