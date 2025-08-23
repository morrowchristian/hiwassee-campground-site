import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaWater, FaWifi, FaHiking } from "react-icons/fa";
export default function Home() {
  return (
    <div>
      {/* Hero Section - Split Layout */}
      <div className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            {/* Text Column */}
            <Col md={6}>
              <h1 className="display-4 fw-bold">Welcome to Hiwassee Campground</h1>
              <p className="lead">
                Relax, explore, and enjoy scenic river views, modern amenities, and outdoor adventures.
              </p>
              <Button href="/book" variant="success" size="lg">
                Book Your Stay
              </Button>
            </Col>

            {/* Image Column */}
            <Col md={6}>
              <img
                src="https://picsum.photos/600/400?grayscale"
                alt="Scenic river view"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Why Choose Us Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center p-3">
              <FaWater size={48} className="mb-3 text-success" />
              <Card.Title>Scenic River Views</Card.Title>
              <Card.Text>
                Wake up to breathtaking views of the Hiwassee River from every campsite.
              </Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center p-3">
              <FaWifi size={48} className="mb-3 text-success" />
              <Card.Title>Modern Amenities</Card.Title>
              <Card.Text>
                Full hookups, Wi-Fi, clean facilities, and everything you need for a comfortable stay.
              </Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center p-3">
              <FaHiking size={48} className="mb-3 text-success" />
              <Card.Title>Outdoor Adventures</Card.Title>
              <Card.Text>
                Hiking, kayaking, fishing, and family fun just steps from your tent or cabin.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
