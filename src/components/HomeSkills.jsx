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
        <Col
          lg={5}
          className="d-none d-lg-block position-relative skills-div-cont"
        >
          {/* <Row>
            <Col xs={6} className="p-4"> */}
          <div className="box box1 position-absolute">
            <img src={require("../assets/icon1.png")} alt="" />
          </div>
          {/* </Col>
            <Col xs={6} className="p-4"> */}
          <div className="box box2 position-absolute">
            <img src={require("../assets/icon2.png")} alt="" />
          </div>
          {/* </Col>
            <Col xs={6} className="p-4"> */}
          <div className="box box3 position-absolute">
            <img src={require("../assets/icon3.png")} alt="" />
          </div>
          {/* </Col>
            <Col xs={6} className="p-4"> */}
          <div className="box box4  position-absolute">
            <img src={require("../assets/icon4.png")} alt="" />
          </div>
          {/* </Col>
          </Row> */}
        </Col>
        <Col lg={7} xs={12}>
          desce
        </Col>
      </Row>
    </Container>
  );
}

export default HomeSkills;
