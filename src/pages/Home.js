import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', marginLeft: '250px' }}>
      <section style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero-image.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', position: 'relative' }}>
        <div style={{ backgroundColor: 'rgba(107, 114, 128, 0.7)', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#F9F5EB', marginBottom: '20px' }}>Welcome to Hiwassee Campground</h1>
          <p style={{ fontSize: '18px', color: '#F9F5EB', marginBottom: '20px' }}>Experience nature with riverside camping and scenic views.</p>
          <Link to="/book" style={{ display: 'inline-block', backgroundColor: '#A84435', color: '#F9F5EB', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Book Your Stay</Link>
        </div>
      </section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '40px' }}>
        <div style={{ backgroundColor: '#F5E8C7', padding: '30px', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', border: '1px solid #E0D7C1' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#4A5F4D', marginBottom: '20px' }}>About Us</h2>
          <p style={{ marginBottom: '20px' }}>A family-friendly campground nestled by the river with tall trees and picnic areas.</p>
          <Link to="/about" style={{ color: '#A84435', textDecoration: 'none', fontWeight: '500' }}>Learn More</Link>
        </div>
        <div style={{ backgroundColor: '#F5E8C7', padding: '30px', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', border: '1px solid #E0D7C1' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#4A5F4D', marginBottom: '20px' }}>Attractions</h2>
          <p style={{ marginBottom: '20px' }}>Explore local hikes, fishing spots, and more near Hiwassee.</p>
          <Link to="/attractions" style={{ color: '#A84435', textDecoration: 'none', fontWeight: '500' }}>Discover</Link>
        </div>
        <div style={{ backgroundColor: '#F5E8C7', padding: '30px', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', border: '1px solid #E0D7C1' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#4A5F4D', marginBottom: '20px' }}>Gallery</h2>
          <p style={{ marginBottom: '20px' }}>View stunning photos of our campground and surroundings.</p>
          <Link to="/gallery" style={{ color: '#A84435', textDecoration: 'none', fontWeight: '500' }}>View Gallery</Link>
        </div>
        <div style={{ backgroundColor: '#F5E8C7', padding: '30px', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', border: '1px solid #E0D7C1' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#4A5F4D', marginBottom: '20px' }}>Rates</h2>
          <p style={{ marginBottom: '20px' }}>Affordable rates for RV camping and tent sites.</p>
          <Link to="/rates" style={{ color: '#A84435', textDecoration: 'none', fontWeight: '500' }}>See Rates</Link>
        </div>
        <div style={{ backgroundColor: '#F5E8C7', padding: '30px', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', border: '1px solid #E0D7C1' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#4A5F4D', marginBottom: '20px' }}>Book</h2>
          <p style={{ marginBottom: '20px' }}>Reserve your spot today for an unforgettable stay.</p>
          <Link to="/book" style={{ color: '#A84435', textDecoration: 'none', fontWeight: '500' }}>Book Now</Link>
        </div>
        <div style={{ backgroundColor: '#F5E8C7', padding: '30px', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', border: '1px solid #E0D7C1' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#4A5F4D', marginBottom: '20px' }}>Contact</h2>
          <p style={{ marginBottom: '20px' }}>Get in touch for more information or inquiries.</p>
          <Link to="/contact" style={{ color: '#A84435', textDecoration: 'none', fontWeight: '500' }}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;