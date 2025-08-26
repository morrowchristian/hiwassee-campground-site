// src/pages/Contact.js
import Hero from "../components/Hero/Hero";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      {/* Hero section */}
      <Hero
        title="Contact Us"
        subtitle="Questions? Send us a message and we'll respond promptly."
        buttonText="Book Your Stay"
        buttonLink="/book"
        imageSrc="https://picsum.photos/600/400?5"
      />

      {/* Contact form */}
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Write your message" required />
              </Form.Group>
              <Button type="submit" variant="success">Send Message</Button>
            </Form>
          </Col>
          <Col md={6}>
            <h5>Address</h5>
            <p>123 River Rd, Reliance, TN</p>
            <h5>Phone</h5>
            <p>(555) 123-4567</p>
            <h5>Email</h5>
            <p>info@hiwasseecampground.com</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
