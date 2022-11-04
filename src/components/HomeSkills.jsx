import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeSkills() {
  return (
    <Container>
      <Row>
        <Col xs={12} className="mb-4 mb-lg-0">
          <div className="position-relative">
            <h1 className="secondary-color projects-h1 d-inline position-relative pe-3">
              <span className="primary-color">#</span>Skills
            </h1>
            <div className="skills-line position-absolute"></div>
          </div>
        </Col>
        <Col lg={4} className="d-none d-lg-block">
          itens
        </Col>
        <Col lg={8} xs={12}>
          desce
        </Col>
      </Row>
    </Container>
  );
}

export default HomeSkills;
