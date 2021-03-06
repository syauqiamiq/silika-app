import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logo.png";
import "../../css/navbar.css";

const NavbarComponent = () => {
  return (
    <>
      <Navbar className="navBG" expand="xl">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="nav-group" id="basic-nav-dropdown">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <NavDropdown title="Other System" className="dropdown-wrap">
                <a href="https://simponia.infotech.umm.ac.id/" className="dropdown-item">
                  SIMPONIA
                </a>
                <a href="https://infotech.umm.ac.id/apk/" className="dropdown-item">
                  APK
                </a>
                <a href="http://sirenta.infotech.umm.ac.id/" className="dropdown-item">
                  SIRENTA
                </a>
                <a href="http://simutu.infotech.umm.ac.id/" className="dropdown-item">
                  SIMUTU
                </a>
                <NavDropdown.Divider />
                <a href="https://infokhs.umm.ac.id/" className="dropdown-item">
                  INFO KHS
                </a>
              </NavDropdown>
              <Link to="/information" className="nav-link">
                Information
              </Link>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
              <Link to="/schedule" className="nav-link">
                Schedule
              </Link>
              <Link to="/auth/login" className="nav-Link">
                <Button className="btn-login ">Login</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
