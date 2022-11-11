import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function HomeSkills() {
  return (
    <Container className="my-lg-5">
      <Row className="d-flex justify-content-between">
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
          <div className="box box1 position-absolute box-hover">
            <img src={require("../assets/icon1.png")} alt="" />
          </div>
          {/* </Col>
            <Col xs={6} className="p-4"> */}
          <div className="box box2 position-absolute box-hover">
            <img src={require("../assets/icon2.png")} alt="" />
          </div>
          {/* </Col>
            <Col xs={6} className="p-4"> */}
          <div className="box box3 position-absolute box-hover">
            <img src={require("../assets/icon3.png")} alt="" />
          </div>
          {/* </Col>
            <Col xs={6} className="p-4"> */}
          <div className="box box4  position-absolute box-hover">
            <img src={require("../assets/icon4.png")} alt="" />
          </div>
          {/* </Col>
          </Row> */}
        </Col>
        <Col lg={7} xs={12}>
          <Row className="d-flex justify-content-end">
            <Col lg={4}>
              <Card.Body className="text-center  m-3 border border-secondary">
                <Card.Header className="border-bottom border-secondary p-3">
                  Languages
                </Card.Header>

                <Card.Text className="p-3 text-secondary">
                  PHP JavaScript Python
                </Card.Text>
              </Card.Body>
            </Col>
            <Col lg={4}>
              <Card.Body className="text-center  m-3 border border-secondary">
                <Card.Header className="border-bottom border-secondary p-3">
                  Databases
                </Card.Header>

                <Card.Text className="p-3 text-secondary">
                  MongoDB MySQL FirestoreDB
                </Card.Text>
              </Card.Body>
            </Col>
            <Col lg={4}>
              <Card.Body className="text-center  m-3 border border-secondary">
                <Card.Header className="border-bottom border-secondary p-3">
                  Tools
                </Card.Header>

                <Card.Text className="p-3 text-secondary">
                  VSCode Sublime Figma Git GitBash FontAwesome Figma
                </Card.Text>
              </Card.Body>
            </Col>
            {/* <Row className="d-flex justify-content-end"> */}
            <Col lg={4}>
              <Card.Body className="text-center  m-3 border border-secondary">
                <Card.Header className="border-bottom border-secondary p-3">
                  Others
                </Card.Header>

                <Card.Text className="p-3 text-secondary">
                  HTML CSS SCSS REST RAPID API
                </Card.Text>
              </Card.Body>
            </Col>
            <Col lg={4}>
              <Card.Body className="text-center  m-3 border border-secondary">
                <Card.Header className="border-bottom border-secondary p-3">
                  Frameworks/
                  <br />
                  Libraries
                </Card.Header>

                <Card.Text className="p-3 text-secondary">
                  ReactJS ExpressJS ReactNative Bootstrap TailwindCSS
                </Card.Text>
              </Card.Body>
            </Col>
            {/* </Row> */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeSkills;
