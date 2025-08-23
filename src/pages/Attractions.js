import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Attractions() {
  const attractions = [
    { title: "Hiking Trails", description: "Explore miles of scenic trails.", img: "https://picsum.photos/400/250?7" },
    { title: "Kayaking & Fishing", description: "Fun on the Hiwassee River.", img: "https://picsum.photos/400/250?8" },
    { title: "Local Dining", description: "Enjoy nearby restaurants and cafes.", img: "https://picsum.photos/400/250?9" },
  ];

  return (
    <Container className="py-5">
      <h1 className="mb-4">Nearby Attractions</h1>
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
  );
}
