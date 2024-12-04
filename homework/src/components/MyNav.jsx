import React from "react";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar bg="dark" expand="lg" className="px-4 py-3 mb-1">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
            alt="netflix_logo"
            style={{ width: "6em" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="bg-danger text-light" />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <Nav.Link href="#" className="text-light active">Home</Nav.Link>
            <Nav.Link href="#" className="text-light fw-bold">TV Shows</Nav.Link>
            <Nav.Link href="#" className="text-light">Movies</Nav.Link>
            <Nav.Link href="#" className="text-light disabled">Recently Added</Nav.Link>
            <Nav.Link href="#" className="text-light disabled">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ms-auto d-none d-lg-flex align-items-center">
          <Nav.Link href="#" className="text-light"><i className="bi bi-search"></i></Nav.Link>
          <Nav.Link href="#" className="text-light">KIDS</Nav.Link>
          <Nav.Link href="#" className="text-light"><i className="bi bi-bell-fill"></i></Nav.Link>
          <NavDropdown title={<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf9jChzRXCl9qt0V_QbfRxO443luOI3Aqsw&s" className="rounded-circle" alt="avatar" style={{ width: "2em" }} />} id="nav-avatar" />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
