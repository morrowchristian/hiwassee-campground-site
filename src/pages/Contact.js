import { Link } from "react-router-dom";

function Contact() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', marginLeft: '250px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '30px' }}>
        <div style={{ backgroundColor: '#F5E8C7', padding: '40px', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', border: '1px solid #E0D7C1' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#4A5F4D', marginBottom: '20px' }}>Contact Us</h1>
          <p style={{ marginBottom: '20px' }}>Get in touch with Hiwassee Campground for more information or inquiries.</p>
          <p style={{ marginBottom: '10px' }}>Email: info@hiwassee campground.com</p>
          <p style={{ marginBottom: '10px' }}>Phone: (555) 123-4567</p>
          <p style={{ marginBottom: '20px' }}>Address: 123 River Rd, Hiwassee, TN 37365</p>
          <Link to="/" style={{ color: '#A84435', textDecoration: 'none', fontWeight: '500' }}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;