import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainIcon from "../assets/navLogo.png";
import { FaFacebookMessenger, FaGoogle, FaSms, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Container className="text-white  pt-5 footer mt-3">
      <Row>
        <Col lg={8} xs={12}>
          <Row>
            <Col lg={12} className="secondary-color">
              <img src={MainIcon} className="navbar-Icon" />{" "}
              <small>ChristianBarrios995@gmail.com</small>
            </Col>
            <Col className="text-center text-lg-start">
              Full-stack developer and React Native developer in Philippines
            </Col>
          </Row>
        </Col>
        <Col
          lg={4}
          xs={12}
          className=" d-flex justify-content-lg-end justify-content-center mt-4"
        >
          <Row>
            <Col className="text-center mb-3" lg={12}>
              Media
            </Col>
            <Col className="d-flex justify-content-around px-5">
              {" "}
              <FaFacebookMessenger className="icons" />
              <FaGoogle className="icons" />
              <FaSms className="icons" />
              <FaGithub className="icons" />
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
