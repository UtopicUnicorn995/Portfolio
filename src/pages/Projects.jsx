import { Container, Row, Col } from "react-bootstrap";
import { FaArrowsAltH, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <Container className="secondary-color ">
      <Container className="my-4">
        <h3 className="text-hover mt-3 text-white">
          <span className="primary-color">/</span>projects
        </h3>
        <p>list of my projects</p>
      </Container>
      <Container className="mt-5">
        <h4 className="text-hover text-white">
          <span className="primary-color">#</span>completed projects
        </h4>
      </Container>
      <Container>
        <Row>
          <Col
            xs={12}
            lg={4}
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
                src={require("../assets/houseMarket.png")}
              />
              <Card.Body>
                <Card.Header className="spanHead">
                  <span className="card-span">ReactJS</span>{" "}
                  <span className="card-span">Firebase</span>{" "}
                  <span className="card-span">FirestoreDB</span>{" "}
                </Card.Header>
                <Card.Title>House Market</Card.Title>
                <Card.Text className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      Live&nbsp;
                      <FaArrowsAltH />
                    </Link>
                  </Col>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      code&nbsp;
                      <FaCode />
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={4}
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      Live&nbsp;
                      <FaArrowsAltH />
                    </Link>
                  </Col>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      code&nbsp;
                      <FaCode />
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={4}
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
                src={require("../assets/watersport.png")}
              />
              <Card.Body>
                <Card.Header className="spanHead">
                  <span className="card-span">ReactJS</span>{" "}
                  <span className="card-span">NodeJS</span>{" "}
                  <span className="card-span">MongoDB</span>{" "}
                </Card.Header>
                <Card.Title> Water Sports Ride</Card.Title>
                <Card.Text className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      Live&nbsp;
                      <FaArrowsAltH />
                    </Link>
                  </Col>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      code&nbsp;
                      <FaCode />
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h4 className="text-hover text-white">
          <span className="primary-color">#</span>small projects
        </h4>
      </Container>
      <Container>
        <Row>
          <Col
            lg={3}
            xs={12}
            className="d-flex justify-content-center align-items-center mb-lg-4"
          >
            <Card
              body
              className="m-2 rounded-0 border border-secondary"
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="rounded-0"
                variant="top"
                src={require("../assets/css.gif")}
              />
              <Card.Body>
                <Card.Title>CSS only Bouncing animations</Card.Title>
                <Card.Text className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      Live&nbsp;
                      <FaArrowsAltH />
                    </Link>
                  </Col>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      code&nbsp;
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
            className="d-flex justify-content-center align-items-center mb-lg-4"
          >
            <Card
              body
              className="m-2 rounded-0 border border-secondary"
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="rounded-0"
                variant="top"
                src={require("../assets/dadJoke.gif")}
              />
              <Card.Body>
                <Card.Title>Dad Jokes API</Card.Title>
                <Card.Text className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      Live&nbsp;
                      <FaArrowsAltH />
                    </Link>
                  </Col>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      code&nbsp;
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
            className="d-flex justify-content-center align-items-center mb-lg-4"
          >
            <Card
              body
              className="m-2 rounded-0 border border-secondary"
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="rounded-0"
                variant="top"
                src={require("../assets/consoleHomePage.gif")}
              />
              <Card.Body>
                <Card.Title>Comparing consoles homepage</Card.Title>
                <Card.Text className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      Live&nbsp;
                      <FaArrowsAltH />
                    </Link>
                  </Col>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      code&nbsp;
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
            className="d-flex justify-content-center align-items-center mb-lg-4"
          >
            <Card
              body
              className="m-2 rounded-0 border border-secondary"
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="rounded-0"
                variant="top"
                src={require("../assets/scrolling.gif")}
              />
              <Card.Body>
                <Card.Title>To-do-list scroll animation</Card.Title>
                <Card.Text className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      Live&nbsp;
                      <FaArrowsAltH />
                    </Link>
                  </Col>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      code&nbsp;
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
            className="d-flex justify-content-center align-items-center mb-lg-4"
          >
            <Card
              body
              className="m-2 rounded-0 border border-secondary"
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="rounded-0"
                variant="top"
                src={require("../assets/page.gif")}
              />
              <Card.Body>
                <Card.Title>Rotating Navigation</Card.Title>
                <Card.Text className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      Live&nbsp;
                      <FaArrowsAltH />
                    </Link>
                  </Col>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      code&nbsp;
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
            className="d-flex justify-content-center align-items-center mb-lg-4"
          >
            <Card
              body
              className="m-2 rounded-0 border border-secondary"
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="rounded-0"
                variant="top"
                src={require("../assets/accordion.gif")}
              />
              <Card.Body>
                <Card.Title>Customized accordion display</Card.Title>
                <Card.Text className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      Live&nbsp;
                      <FaArrowsAltH />
                    </Link>
                  </Col>
                  <Col className="justify-content-center d-flex">
                    <Link className="btn btn-text text-secondary border-secondary rounded-0 card-button">
                      code&nbsp;
                      <FaCode />
                    </Link>
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

export default Projects;
