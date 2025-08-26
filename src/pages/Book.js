import { Link } from "react-router-dom";

function Book() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', marginLeft: '250px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '30px' }}>
        <div style={{ backgroundColor: '#F5E8C7', padding: '40px', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', border: '1px solid #E0D7C1' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#4A5F4D', marginBottom: '20px' }}>Book Your Stay</h1>
          <p style={{ marginBottom: '20px' }}>Reserve your spot at Hiwassee Campground today. Choose your dates and site type below.</p>
          <form style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="date" style={{ padding: '10px', border: '1px solid #E0D7C1', borderRadius: '6px', width: '100%', fontSize: '16px' }} />
            <input type="date" style={{ padding: '10px', border: '1px solid #E0D7C1', borderRadius: '6px', width: '100%', fontSize: '16px' }} />
            <select style={{ padding: '10px', border: '1px solid #E0D7C1', borderRadius: '6px', width: '100%', fontSize: '16px' }}>
              <option>RV Site</option>
              <option>Tent Site</option>
            </select>
            <button type="submit" style={{ padding: '12px', backgroundColor: '#A84435', color: '#F9F5EB', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px', fontWeight: '500' }}>Submit Booking</button>
          </form>
          <Link to="/" style={{ color: '#A84435', textDecoration: 'none', marginTop: '20px', display: 'inline-block', fontWeight: '500' }}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Book;