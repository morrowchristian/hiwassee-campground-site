import React from "react";
import { Container, Table } from "react-bootstrap";

export default function Rates() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Rates & Amenities</h1>
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
  );
}
