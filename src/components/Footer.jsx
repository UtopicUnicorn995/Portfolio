import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainIcon from "../assets/navLogo.png";
import { FaFacebookMessenger, FaGoogle, FaSms, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Container className="text-white  pt-5 footer mt-3">
      <Row>
        <Col lg={7} className="d-none d-lg-block">
          <Row>
            <Col lg={12} className="secondary-color">
              <img src={MainIcon} className="navbar-Icon" />{" "}
              <small>ChristianBarrios995@gmail.com</small>
            </Col>
            <Col>
              Full-stack developer and React Native developer in Philippines
            </Col>
          </Row>
        </Col>
        <Col lg={5} className=" d-flex justify-content-end d-none d-lg-block">
          <Row>
            <Col className="text-center" lg={12}>
              Media
            </Col>
            <Col className="d-flex justify-content-around px-5">
              {" "}
              <FaFacebookMessenger />
              <FaGoogle />
              <FaSms />
              <FaGithub />
            </Col>
          </Row>
        </Col>
        <Col className="text-center secondary-color mt-5 mb-3 w-100" lg={12}>
          &#169;Copyright 2022. Made by Ian
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
