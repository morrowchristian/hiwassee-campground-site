// src/pages/Gallery.js
import Hero from "../components/Hero/Hero";
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
    <>
      {/* Hero section */}
      <Hero
        title="Photo Gallery"
        subtitle="Explore snapshots of our beautiful campground and adventures."
        buttonText="Book Your Stay"
        buttonLink="/book"
        imageSrc="https://picsum.photos/600/400?4"
      />

      {/* Gallery images */}
      <Container className="py-5">
        <Row className="g-3">
          {images.map((src, index) => (
            <Col md={4} key={index}>
              <Image src={src} alt={`Gallery ${index + 1}`} fluid rounded />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

