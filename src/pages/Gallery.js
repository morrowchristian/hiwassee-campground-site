import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Gallery() {
  const images = [
    "https://picsum.photos/400/300?1",
    "https://picsum.photos/400/300?2",
    "https://picsum.photos/400/300?3",
    "https://picsum.photos/400/300?4",
    "https://picsum.photos/400/300?5",
    "https://picsum.photos/400/300?6",
  ];

  return (
    <Container className="py-5">
      <h1 className="mb-4">Photo Gallery</h1>
      <Row className="g-3">
        {images.map((src, index) => (
          <Col md={4} key={index}>
            <Image src={src} alt={`Gallery ${index + 1}`} fluid rounded />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
