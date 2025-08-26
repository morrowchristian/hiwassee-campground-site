// src/pages/Home.js
import Hero from "../components/Hero/Hero";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaWater, FaWifi, FaHiking } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <Hero
        title="Welcome to Hiwassee Campground"
        subtitle="Relax, explore, and enjoy scenic river views, modern amenities, and outdoor adventures."
        buttonText="Book Your Stay"
        buttonLink="/book"
        imageSrc="https://picsum.photos/600/400?grayscale"
      />

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
    </>
  );
}
