import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <Container className="my-lg-5">
      <Row>
        <Col xs={12} className="mb-4 mb-lg-0">
          <div className="position-relative">
            <h1 className="secondary-color projects-h1 d-inline position-relative pe-3">
              <span className="primary-color">#</span>About-me
            </h1>
            <div className="skills-line position-absolute"></div>
          </div>
        </Col>
      </Row>
      <Row className="d-flex flex-column-reverse flex-lg-row ">
        <Col lg={6} className="text-secondary py-5">
          <p className="my-4 text-hover">Hello I'm Ian!</p>

          <p className="my-4 text-hover">
            I am a full stack developer based in Iloilo, Philippines. I can
            develop responsive and fun websites from scratch and raise them into
            modern user-friendly web experiences.
          </p>
          <p className="my-4 text-hover">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients and
            fellow developers to establish their presence online. I always
            strive to learn about the newest technologies and frameworks.
          </p>
          <Link to="/about">
            <div className="button-container">
              <button className="d-none btn-contact d-lg-block px-4">
                Read more <FaArrowRight />
              </button>
            </div>
          </Link>
        </Col>
        <Col lg={6} className="d-flex justify-content-center">
          <img
            src={require("../assets/avatar.png")}
            alt=""
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeAbout;
