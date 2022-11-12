import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MainIcon from "../assets/navLogo.png";
import { Link } from "react-router-dom";
import { FaFacebookMessenger, FaGoogle, FaSms, FaGithub } from "react-icons/fa";
import FixedIcons from "./FixedIcons";

function NavigationBar() {
  return (
    <Container>
      <Navbar
        className="mainNavBar justify-content-between "
        variant="dark"
        expand="lg"
        fixed="top"
      >
        <FixedIcons />
        <Container>
          <Navbar.Brand className="links-hover" as={Link} to="/">
            <img className="navbar-Icon " src={MainIcon} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto">
              <Nav.Link className="links-hover" as={Link} to="/">
                <span className="primary-color">#</span>Home
              </Nav.Link>
              <Nav.Link className="links-hover" as={Link} to="/projects">
                <span className="primary-color">#</span>Works
              </Nav.Link>
              <Nav.Link className="links-hover" as={Link} to="/about">
                <span className="primary-color">#</span>About-me
              </Nav.Link>
              <Nav.Link className="links-hover" as={Link} to="/Contact">
                <span className="primary-color">#</span>Contacts
              </Nav.Link>
              <NavDropdown
                title="EN"
                id="basic-nav-dropdown"
                className="text-white links-hover"
              >
                <NavDropdown.Item className="links-hover" href="#action/3.1">
                  EN
                </NavDropdown.Item>
                <NavDropdown.Item className="links-hover" href="#action/3.2">
                  TG
                </NavDropdown.Item>
                <NavDropdown.Item className="links-hover" href="#action/3.3">
                  SP
                </NavDropdown.Item>
                <NavDropdown.Item className="links-hover" href="#action/3.4">
                  IN
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link
              href="#link"
              className="d-flex justify-content-around secondary-color my-4 d-block d-lg-none"
            >
              <FaFacebookMessenger />
              <FaGoogle />
              <FaSms />
              <FaGithub />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavigationBar;
