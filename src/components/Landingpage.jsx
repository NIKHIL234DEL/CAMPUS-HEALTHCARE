import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';
import nitLogo from "./image.png";

const LandingPage = () => {
  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      {/* 1. Navbar with NIT Jamshedpur Logo */}
      <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center fw-bold text-primary">
            {/* Replace the URL with the actual NIT Jamshedpur logo path */}
            <img
              src={nitLogo}
              alt="NIT Jamshedpur"
              height="70"
              className="me-2"
            />
            CampusHealth                    
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Button variant="outline-primary" className="ms-lg-3 me-2 mt-2 mt-lg-0">Login</Button>
              <Button variant="primary" className="mt-2 mt-lg-0">Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 2. Hero Section */}
      <div className="bg-light py-5">
        <Container className="py-5">
          <Row className="align-items-center text-center text-lg-start">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-3">Health Tracking for NIT Jamshedpur.</h1>
              <p className="lead text-muted mb-4">
                A smart, AI-driven platform for students to report symptoms, track mental well-being, 
                and stay connected with campus medical staff.
              </p>
              <Button variant="primary" size="lg" className="me-3 px-4 shadow-sm">Report an Issue</Button>
              <Button variant="outline-secondary" size="lg" className="px-4 shadow-sm">View Trends</Button>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
                {/* Illustration placeholder */}
              <div className="bg-primary text-white rounded-4 shadow-lg p-5 text-center">
                 <h2 className="mb-3">🩺</h2>
                 <h3>Digital Campus Dispensary</h3>
                 <p className="opacity-75">Ensuring faster communication between students and staff.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. Features Section (Ab content ke saath) */}
      <Container id="features" className="py-5">
        <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase fw-bold">Services</h6>
            <h2 className="fw-bold">What We Offer</h2>
        </div>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <Card.Body>
                <div className="fs-1 mb-3">🤖</div>
                <Card.Title className="fw-bold">AI Health Assessment</Card.Title>
                <Card.Text className="text-muted">
                  Preliminary health assessments based on your symptoms to provide instant guidance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <Card.Body>
                <div className="fs-1 mb-3">📊</div>
                <Card.Title className="fw-bold">Health Trend Analysis</Card.Title>
                <Card.Text className="text-muted">
                  Helping the administration analyze health trends to take timely actions during outbreaks.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <Card.Body>
                <div className="fs-1 mb-3">🔐</div>
                <Card.Title className="fw-bold">Data Privacy</Card.Title>
                <Card.Text className="text-muted">
                  Ensuring high-level data privacy and secure access to your sensitive health information.
                </Card.Text>
              </Card.Body>                       
            </Card>
          </Col>
        </Row>
      </Container>

      {/* 4. About Section */}
      <div id="about" className="bg-white py-5 border-top">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
               <img 
                 src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                 alt="Healthcare" 
                 className="img-fluid rounded-4 shadow-sm"
               />                                                              
            </Col>
            <Col md={6} className="ps-md-5">
              <h2 className="fw-bold mb-4">About us</h2>
              <p className="text-muted">
                The Campus Health Issue Tracker is designed to modernize the way health issues are handled at NIT Jamshedpur. 
                Instead of manual entries, we provide a unified digital platform.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">✅ Detect early signs of mental health issues like anxiety.</li>
                <li className="mb-2">✅ Digital health records accessible anytime.</li>
                <li className="mb-2">✅ Reminders for medication and hydration.</li>
                <li className="mb-2">✅ Faster communication with campus medical staff.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 5. Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <Container className="text-center">
          <p className="mb-0">© 2025 Campus Health Tracker System | Developed for NIT Jamshedpur</p>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;             