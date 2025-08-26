import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', marginLeft: '250px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '30px' }}>
        <div style={{ backgroundColor: '#F5E8C7', padding: '40px', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', border: '1px solid #E0D7C1' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#4A5F4D', marginBottom: '20px' }}>Gallery</h1>
          <p style={{ marginBottom: '20px' }}>Explore stunning photos of Hiwassee Campground, from riverside views to cozy campsites.</p>
          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            <div style={{ backgroundColor: '#E0D7C1', height: '150px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}></div>
            <div style={{ backgroundColor: '#E0D7C1', height: '150px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}></div>
            <div style={{ backgroundColor: '#E0D7C1', height: '150px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}></div>
            <div style={{ backgroundColor: '#E0D7C1', height: '150px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}></div>
          </div>
          <Link to="/" style={{ color: '#A84435', textDecoration: 'none', marginTop: '20px', display: 'inline-block', fontWeight: '500' }}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;