// src/pages/Rates.js
import Hero from "../components/Hero/Hero";
import { Container, Table } from "react-bootstrap";

export default function Rates() {
  return (
    <>
      {/* Hero section */}
      <Hero
        title="Rates & Amenities"
        subtitle="Affordable camping options with modern facilities and scenic views."
        buttonText="Book Your Stay"
        buttonLink="/book"
        imageSrc="https://picsum.photos/600/400?3"
      />

      {/* Rates table */}
      <Container className="py-5">
        <p>All sites include access to our modern facilities, Wi-Fi, and scenic views.</p>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Site Type</th>
              <th>Nightly Rate</th>
              <th>Amenities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RV Full Hookup</td>
              <td>$45</td>
              <td>Water, Electric, Sewer, Wi-Fi</td>
            </tr>
            <tr>
              <td>RV Partial Hookup</td>
              <td>$35</td>
              <td>Water, Electric, Wi-Fi</td>
            </tr>
            <tr>
              <td>Tent Site</td>
              <td>$25</td>
              <td>Water, Wi-Fi</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
