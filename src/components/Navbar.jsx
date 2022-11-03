import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MainIcon from "../assets/navLogo.png";
import { FaFacebookMessenger, FaGoogle, FaSms, FaGithub } from "react-icons/fa";

function NavigationBar() {
  return (
    <Navbar
      className="mainNavBar justify-content-between "
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img className="navbar-Icon" src={MainIcon} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto">
            <Nav.Link href="#home">
              <span className="color-primary">#</span>Home
            </Nav.Link>
            <Nav.Link href="#link">
              <span className="color-primary">#</span>Works
            </Nav.Link>
            <Nav.Link href="#link">
              <span className="color-primary">#</span>About-me
            </Nav.Link>
            <Nav.Link href="#link">
              <span className="color-primary">#</span>Contacts
            </Nav.Link>
            <NavDropdown
              title="EN"
              id="basic-nav-dropdown"
              className="text-white"
            >
              <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">TG</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SP</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">IN</NavDropdown.Item>
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
  );
}

export default NavigationBar;
