import { Link } from "react-router-dom";

function Rates() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', marginLeft: '250px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '30px' }}>
        <div style={{ backgroundColor: '#F5E8C7', padding: '40px', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', border: '1px solid #E0D7C1' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#4A5F4D', marginBottom: '20px' }}>Camping Rates</h1>
          <p style={{ marginBottom: '20px' }}>Affordable rates for an unforgettable stay at Hiwassee Campground.</p>
          <ul style={{ margin: '20px 0', paddingLeft: '25px' }}>
            <li style={{ marginBottom: '10px' }}>RV Sites: $35/night</li>
            <li style={{ marginBottom: '10px' }}>Tent Sites: $25/night</li>
            <li style={{ marginBottom: '10px' }}>Weekly Discounts: 10% off</li>
          </ul>
          <p style={{ marginBottom: '20px' }}>Contact us for seasonal rates or group bookings.</p>
          <Link to="/" style={{ color: '#A84435', textDecoration: 'none', fontWeight: '500' }}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Rates;