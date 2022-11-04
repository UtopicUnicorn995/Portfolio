import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowRight } from "react-icons/fa";

function HomeProjects() {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={9} xs={12} className="mb-4 mb-lg-0">
          <div className="position-relative">
            <h1 className="secondary-color projects-h1 d-inline position-relative pe-3">
              <span className="primary-color">#</span>Projects
            </h1>
            <div className="project-line position-absolute"></div>
          </div>
        </Col>
        <Col
          lg={3}
          xs={12}
          className="d-flex justify-content-end justify-content-lg-center align-items-center "
        >
          <div className="position-relative ">
            <button className="border border-0">
              <h5 className="secondary-color projects-h1 d-inline position-relative-pe-3">
                View more <FaArrowRight />
              </h5>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeProjects;
