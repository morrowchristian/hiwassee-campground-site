import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', marginLeft: '250px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '30px' }}>
        <div style={{ backgroundColor: '#F5E8C7', padding: '40px', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', border: '1px solid #E0D7C1' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#4A5F4D', marginBottom: '20px' }}>About Hiwassee Campground RV Park</h1>
          <p style={{ marginBottom: '20px' }}>Nestled along the scenic Hiwassee River, our campground offers a peaceful retreat with tall trees, green awnings, and riverside picnic areas. Established to provide a family-friendly outdoor experience, we cater to RV campers and tent enthusiasts alike. Our commitment is to preserve the natural beauty while offering modern amenities.</p>
          <p style={{ marginBottom: '20px' }}>Learn about our history, staff, and the local community that makes Hiwassee special.</p>
          <Link to="/" style={{ color: '#A84435', textDecoration: 'none', fontWeight: '500' }}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default About;