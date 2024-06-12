import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import pdf from "../assets/ChristianBarriosResume.pdf";

function About() {
  return (
    <Container className="text-secondary  mt-5 pt-3">
      <Container className="my-4">
        <h3 className="text-hover mt-3 text-white">
          <span className="primary-color">/</span>about-me
        </h3>
        <p>Who am I?</p>
      </Container>
      <Container className="my-lg-5">
        <Row className="d-flex flex-column-reverse flex-lg-row px-4">
          <Col lg={6} className="text-secondary px-3">
            <p className="my-4 text-hover">Hello, I'm Ian!</p>

            <p className="my-4 text-hover">
              I am a full stack developer based in Iloilo, Philippines. I can
              develop responsive and fun websites from scratch and raise them
              into modern user-friendly web experiences.
            </p>
            <p className="my-4 text-hover">
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients
              and fellow developers to establish their presence online. I always
              strive to learn about the newest technologies and frameworks.
            </p>
            <div className="d-flex justify-content-between">
              <a href={pdf} target="_blank" rel="noreferrer">
                <div className="button-container">
                  <button className="d-none btn-contact d-lg-block px-4">
                    View Resume <FaEye />
                  </button>
                </div>
              </a>
            </div>
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
      <Container className="my-4">
        <h3 className="text-hover mt-3 text-white">
          <span className="primary-color">#</span>skills
        </h3>
      </Container>
      <Container className="my-lg-5">
        <Row className="d-flex justify-content-between">
          <Col xs={12} md={6} lg={3}>
            <Card.Body className="text-center  m-3 border border-secondary">
              <Card.Header className="border-bottom border-secondary text-white p-3">
                Languages
              </Card.Header>

              <Card.Text className="p-3 text-hover text-secondary">
                PHP JavaScript Python
              </Card.Text>
            </Card.Body>
          </Col>
          <Col xs={12} md={6} lg={3} xl={2}>
            <Card.Body className="text-center  m-3 border border-secondary">
              <Card.Header className="border-bottom border-secondary text-white p-3">
                Databases
              </Card.Header>

              <Card.Text className="p-3 text-hover text-secondary">
                MongoDB MySQL FirestoreDB
              </Card.Text>
            </Card.Body>
          </Col>
          <Col xs={12} md={6} lg={3} xl={2}>
            <Card.Body className="text-center  m-3 border border-secondary">
              <Card.Header className="border-bottom border-secondary text-white p-3">
                Tools
              </Card.Header>

              <Card.Text className="p-3 text-hover text-secondary">
                VSCode Sublime Figma Git GitBash FontAwesome Figma
              </Card.Text>
            </Card.Body>
          </Col>
          {/* <Row className="d-flex justify-content-end"> */}
          <Col xs={12} md={6} lg={3} xl={2}>
            <Card.Body className="text-center  m-3 border border-secondary">
              <Card.Header className="border-bottom border-secondary text-white p-3">
                Others
              </Card.Header>

              <Card.Text className="p-3 text-hover text-secondary">
                HTML CSS SCSS REST RAPID API
              </Card.Text>
            </Card.Body>
          </Col>
          <Col xs={12} md={6} lg={3} xl={2}>
            <Card.Body className="text-center  m-3 border border-secondary">
              <Card.Header className="border-bottom border-secondary text-white p-3">
                Frameworks/
                <br />
                Libraries
              </Card.Header>

              <Card.Text className="p-3 text-hover text-secondary">
                ReactJS ExpressJS ReactNative Bootstrap TailwindCSS
              </Card.Text>
            </Card.Body>
          </Col>
          {/* </Row> */}
        </Row>
      </Container>
      <Container>
        <h3 className="text-hover my-3 my-lg-5 text-white">
          <span className="primary-color">#</span>my-fun-facts
        </h3>
      </Container>
      <Row className="d-flex justify-content-lg-between ">
        <Col xs={12} lg={7}>
          <Row>
            <Col xs={6} md={4} className="text-hover">
              <p className="border border-secondary p-2 ">
                I like all kinds of animals.
              </p>
            </Col>
            <Col xs={6} md={4} className="text-hover">
              <p className="border border-secondary p-2 ">
                I practice combat sports such as boxing and Muay Thai.
              </p>
            </Col>
            <Col xs={6} md={4} className="text-hover">
              <p className="border border-secondary p-2 ">
                I'm a night person, I learn faster at night.
              </p>
            </Col>
            <Col xs={6} md={4} className="text-hover">
              <p className="border border-secondary p-2 ">
                I've won lots of E-sports tournament back at college.
              </p>
            </Col>
            <Col xs={6} md={4} className="text-hover">
              <p className="border border-secondary p-2 ">
                I love meat but I don't eat meat if I see them getting butchered.
              </p>
            </Col>
            <Col xs={6} md={4} className="text-hover">
              <p className="border border-secondary p-2 ">
                I can watch animes for more than 18 hours a day.
              </p>
            </Col>
          </Row>
        </Col>
        <Col
          lg={3}
          className="d-none d-lg-block d-flex justify-content-center position-relative skills-div-cont"
        >
          <div className="box box1 position-absolute box-hover">
            <img src={require("../assets/icon1.png")} alt="" />
          </div>

          <div className="box box2 position-absolute box-hover">
            <img src={require("../assets/icon2.png")} alt="" />
          </div>

          <div className="box box3 position-absolute box-hover">
            <img src={require("../assets/icon3.png")} alt="" />
          </div>

          <div className="box box4  position-absolute box-hover">
            <img src={require("../assets/icon4.png")} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
