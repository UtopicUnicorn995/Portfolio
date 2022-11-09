import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import HouseMarketImg from "../assets/HouseMarketImg.png";
import { FaArrowRight, FaArrowsAltH, FaDesktop } from "react-icons/fa";

function HomeProjects() {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={9} xs={12} className="mb-3 mb-lg-0">
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
          className="mt-3 mt-lg-0 d-flex justify-content-end justify-content-lg-center align-items-center "
        >
          <div className="position-relative view-more-button">
            <button className="border border-0">
              <h5 className="secondary-color projects-h1 d-inline position-relative-pe-3">
                View more <FaArrowRight />
              </h5>
            </button>
          </div>
        </Col>
      </Row>

      {/* //Cards */}

      <Container className="my-5">
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
                      Demo&nbsp;
                      <FaDesktop />
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
                src="holder.js/100px180"
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
                      Demo&nbsp;
                      <FaDesktop />
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
                <Card.Title>Tommy's Water Sports</Card.Title>
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
                      Demo&nbsp;
                      <FaDesktop />
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

export default HomeProjects;
