import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const MyFooter = () => {
  return (
    
      <Container fluid className="fixed-bottom bg-dark text-center"  >
        <Row className=" bg-dark text-secondary mt-3 ">
          <Col xs={12} >
            <ul className="list-unstyled d-sm-flex justify-content-center gap-5 ">
              <li className="d-flex gap-3 fs-5 justify-content-center">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-telegram"></i>
                <i className="bi bi-whatsapp"></i>
              </li>
              <li><a href="#!" className="text-secondary text-decoration-none">Audio and Subtitles</a></li>
              <li><a href="#!" className="text-secondary text-decoration-none">Media Center</a></li>
              <li><a href="#!" className="text-secondary text-decoration-none">Privacy</a></li>
              <li><a href="#!" className="text-secondary text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={12}>
            <Button variant="dark" className="border-secondary text-secondary rounded-0 btn-sm mt-3 mb-2">
              Service Code
            </Button>
            <p className="text-secondary">©1997-2019 Netflix, Inc.</p>
          </Col>
        </Row>
      </Container>
    
  );
};

export default MyFooter;
