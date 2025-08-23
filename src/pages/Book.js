import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Book() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Book Your Stay</h1>
      <p>Please fill out the form below to request a reservation. We'll get back to you shortly!</p>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" placeholder="Enter your phone number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDates">
          <Form.Label>Desired Dates</Form.Label>
          <Form.Control type="text" placeholder="MM/DD/YYYY - MM/DD/YYYY" required />
        </Form.Group>
        <Button type="submit" variant="success">Submit Request</Button>
      </Form>
    </Container>
  );
}
