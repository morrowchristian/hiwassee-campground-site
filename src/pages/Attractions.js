// src/pages/Attractions.js
import { Container, Row, Col, Card } from "react-bootstrap";
import Hero from "../components/Hero/Hero";

export default function Attractions() {
  // Attractions array can eventually come from API or CMS
  const attractions = [
    { title: "Hiking Trails", description: "Explore miles of scenic trails.", img: "https://picsum.photos/400/250?7" },
    { title: "Kayaking & Fishing", description: "Fun on the Hiwassee River.", img: "https://picsum.photos/400/250?8" },
    { title: "Local Dining", description: "Enjoy nearby restaurants and cafes.", img: "https://picsum.photos/400/250?9" },
  ];

  return (
    <div>
      {/* Hero Section for Attractions page */}
      <Hero
        title="Nearby Attractions"
        subtitle="Discover fun activities, dining, and outdoor adventures around Hiwassee Campground."
        buttonText="Plan Your Visit"
        buttonLink="/book"
        imageSrc="https://picsum.photos/600/400?7" // placeholder
      />

      {/* List of attractions */}
      <Container className="py-5">
        <Row className="g-4">
          {attractions.map((item, idx) => (
            <Col md={4} key={idx}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}