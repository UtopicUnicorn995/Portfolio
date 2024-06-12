import { Container, Row, Col } from "react-bootstrap";
import { FaArrowsAltH, FaCode } from "react-icons/fa";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <Container className="secondary-color  mt-5 pt-3">
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
                    <a
                      href="/lechef.d3.codes"
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
      <Container className="mt-5 mb-3">
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
                  This is a simple css only animation with a 3D effect that
                  looks good as a screensaver.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <a
                      href="https://utopicunicorn995.github.io/3D-CSS---lighting--animations-/"
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
                      href="https://github.com/UtopicUnicorn995/3D-CSS---lighting--animations-"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-text text-secondary border-secondary rounded-0 card-button"
                    >
                      code&nbsp;
                      <FaCode />
                    </a>
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
                  This web app is mainly made using CSS and JS to fetch corny
                  dad jokes from an API.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <a
                      href="https://utopic-unicorn.github.io/Day-10---Dad-Jokes/"
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
                      href="https://github.com/Utopic-Unicorn/Day-10---Dad-Jokes"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-text text-secondary border-secondary rounded-0 card-button"
                    >
                      code&nbsp;
                      <FaCode />
                    </a>
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
                  A simple home page of an web app that I plan to make in the
                  future.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <a
                      href="https://utopic-unicorn.github.io/Day-7---Split-Landing-Page/"
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
                      href="https://github.com/Utopic-Unicorn/Day-7---Split-Landing-Page"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-text text-secondary border-secondary rounded-0 card-button"
                    >
                      code&nbsp;
                      <FaCode />
                    </a>
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
                  A cool scrolling animation using CSS and JS that I found in
                  udemy that I plan to use someday.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <a
                      href="https://utopic-unicorn.github.io/Day-6---Scroll-Animation/"
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
                      href="https://github.com/Utopic-Unicorn/Day-6---Scroll-Animation"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-text text-secondary border-secondary rounded-0 card-button"
                    >
                      code&nbsp;
                      <FaCode />
                    </a>
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
                  A rotating navigation using JS and CSS that I could use in my
                  next portfolio.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <a
                      href="https://utopic-unicorn.github.io/Day-3/"
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
                      href="https://github.com/Utopic-Unicorn/Day-3"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-text text-secondary border-secondary rounded-0 card-button"
                    >
                      code&nbsp;
                      <FaCode />
                    </a>
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
                  A simple customized accordion display that I plan to use. This
                  is made by manipulating the JS and CSS on button click.
                </Card.Text>
                <Row>
                  <Col className="justify-content-center d-flex">
                    <a
                      href="https://utopic-unicorn.github.io/Day-11---FAQ/"
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
                      href="https://github.com/Utopic-Unicorn/Day-11---FAQ"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-text text-secondary border-secondary rounded-0 card-button"
                    >
                      code&nbsp;
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

export default Projects;
