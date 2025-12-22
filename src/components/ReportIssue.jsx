import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ReportIssue = () => {
  return (
    <Container className="py-5">
      <h2 className="text-primary mb-4">Report Health Issue</h2>
      <Form className="p-4 shadow rounded bg-white">
        <Form.Group className="mb-3">
          <Form.Label>Symptom Details</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Describe how you feel..." />
        </Form.Group>
        <Button variant="danger" type="submit">Get AI Assessment</Button>
      </Form>
    </Container>
  );
};

export default ReportIssue;