import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { fit } from "@cloudinary/url-gen/actions/resize";
import React from "react";
import Login from "./Login";

function NavBar() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dvvauf785",
    },
  });

  const logoImage1 = cld.image("sharkLogoSM_c2zffk");
  const sharkLogo = logoImage1.resize(fit().width(80).height(80)).toURL();

  return (
    <Navbar
      className="navbar navbar-dark bg-dark border-bottom border-light"
      expand="lg"
      style={{ padding: 0 }}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" className="p-0 px-2" />
        <img alt="logo" src={sharkLogo} />
        <Navbar.Brand href="#" style={{ color: "#CCC9C3" }}>
          SharkMovies
        </Navbar.Brand>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/popular">Popular</Nav.Link>
            <Nav.Link href="/toprated">Top Rated</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          <Login />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
