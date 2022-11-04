import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeProjects() {
  return (
    <Container>
      <div className="position-relative">
        <h1 className="secondary-color projects-h1 d-inline position-relative pe-3">
          <span className="primary-color">#</span>Projects
        </h1>
        <div className="project-line position-absolute"></div>
      </div>
      <Row></Row>
    </Container>
  );
}

export default HomeProjects;
