import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function About() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">About Us</h1>
      <Row className="align-items-center">
        <Col md={6}>
          <p>
            Hiwassee Campground RV Resort has been welcoming guests for over 20 years. 
            Nestled along the scenic Hiwassee River, we provide the perfect getaway 
            for families, adventurers, and nature lovers.
          </p>
          <p>
            Our mission is to offer a relaxing and fun outdoor experience while 
            maintaining the natural beauty of the area.
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="https://picsum.photos/600/400?2"
            alt="Campground view"
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}
