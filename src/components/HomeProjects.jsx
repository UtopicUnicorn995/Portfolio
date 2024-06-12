import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import HouseMarketImg from "../assets/HouseMarketImg.png";
import { FaArrowRight, FaArrowsAltH, FaCode } from "react-icons/fa";

function HomeProjects() {
  return (
    <Container className="my-lg-5">
      <Row>
        <Col lg={9} xs={12} className="mb-3 mb-lg-0">
          <div className="position-relative">
            <h1 className="text-white projects-h1 d-inline position-relative pe-3">
              <span className="primary-color">#</span>Projects
            </h1>
            <div className="project-line position-absolute"></div>
          </div>
        </Col>
        <Col
          lg={3}
          xs={12}
          className="mt-3 mt-lg-0 d-flex justify-content-end justify-content-lg-center align-items-center "
        >
          <div className="position-relative view-more-button">
            <Link to="/projects">
              <button className="border border-0">
                <h5 className="secondary-color projects-h1 d-inline position-relative-pe-3">
                  View more <FaArrowRight />
                </h5>
              </button>
            </Link>
          </div>
        </Col>
      </Row>

      {/* //Cards */}

      <Container className="my-5">
        <Row>
          <Col
            xs={12}
            lg={3}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              body
              className="m-2 rounded-0 border-secondary"
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="rounded-0"
                variant="top"
                src={require("../assets/scholaris.png")}
              />
              <Card.Body>
                <Card.Header className="spanHead">
                  <span className="card-span">ReactJS</span>{" "}
                  <span className="card-span">Typescript</span>{" "}
                  <span className="card-span">Ruby on rails</span>{" "}
                </Card.Header>
                <Card.Title>Scholaris website</Card.Title>
                <Card.Text className="text-secondary">
                  I designed and helped create a full-stack website using
                  multiple languages such as React, TypeScript, and Ruby on
                  Rails. I also assisted in testing the pages functionalities
                  and reviewing the code's pull request.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <a
                      href="https://scholaris.netlify.app/student"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-text text-secondary border-secondary rounded-0 card-button"
                    >
                      Live&nbsp;
                      <FaArrowsAltH />
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              body
              className="m-2 rounded-0 border border-secondary"
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="rounded-0"
                variant="top"
                src={require("../assets/leChef.png")}
              />
              <Card.Body>
                <Card.Header className="spanHead">
                  <span className="card-span">ReactJS</span>{" "}
                  <span className="card-span">NodeJS</span>{" "}
                  <span className="card-span">MySql</span>{" "}
                </Card.Header>
                <Card.Title>LeChef Culinary School</Card.Title>
                <Card.Text className="text-secondary">
                  This is my first project as a freelance web developer. A
                  simple full-stack web app for LeChef Culinary School where you
                  can send an email of your enrollment to the Culinary School.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <a
                      href="http://lechef.d3.net/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-text text-secondary border-secondary rounded-0 card-button"
                    >
                      Live&nbsp;
                      <FaArrowsAltH />
                    </a>
                  </Col>
                  <Col className="justify-content-center d-flex">
                    <Link
                      to="/lechef.d3.codes"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-text text-secondary border-secondary rounded-0 card-button"
                    >
                      Code&nbsp;
                      <FaCode />
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              body
              className="m-2 rounded-0 border border-secondary"
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="rounded-0"
                variant="top"
                src={require("../assets/companypage.png")}
              />
              <Card.Body>
                <Card.Header className="spanHead">
                  <span className="card-span">Wordpress</span>{" "}
                  <span className="card-span">PHP</span>{" "}
                  <span className="card-span">jQuery</span>{" "}
                </Card.Header>
                <Card.Title>Sence1 Company website</Card.Title>
                <Card.Text className="text-secondary">
                  This is one of the websites I worked on with my team. I
                  created the design myself, while some of my team members
                  helped with the code and components. 
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <a
                      href="https://sence1.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-text text-secondary border-secondary rounded-0 card-button"
                    >
                      Live&nbsp;
                      <FaArrowsAltH />
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              body
              className="m-2 rounded-0 border border-secondary"
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="rounded-0"
                variant="top"
                src={require("../assets/yt.png")}
              />
              <Card.Body>
                <Card.Header className="spanHead">
                  <span className="card-span">ReactJS</span>{" "}
                  <span className="card-span">Material UI</span>{" "}
                  <span className="card-span">RAPID API</span>{" "}
                </Card.Header>
                <Card.Title>Youtube Clone</Card.Title>
                <Card.Text className="text-secondary">
                  This web app is made from a code along tutorial in youtube
                  where you get to learn fetch API, utilizing the utils, using
                  material UI for the CSS and building a functional react app.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <a
                      href="https://yt-clone-snowy.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-text text-secondary border-secondary rounded-0 card-button"
                    >
                      Live&nbsp;
                      <FaArrowsAltH />
                    </a>
                  </Col>
                  <Col className="justify-content-center d-flex">
                    <a
                      href="https://github.com/Utopic-Unicorn/YTClone"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-text text-secondary border-secondary rounded-0 card-button"
                    >
                      Code&nbsp;
                      <FaCode />
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeProjects;
