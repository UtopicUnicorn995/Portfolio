import personImg from "../assets/person.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainHome() {
  return (
    <div className="homepage ">
      <Container>
        <Row className="mt-lg-3 flex-row justify-content-center">
          <Col lg={7} className="d-lg-flex flex-column justify-content-center">
            <h1 className="homeH1 mb-3 mt-2">
              Ian is a{" "}
              <span className="primary-color">Full-Stack developer</span> and
              <span className="primary-color"> React Native developer</span>
            </h1>

            <p className="secondary-color">
              He crafts responsive websites and user friendly mobile apps where
              technologies meet creativity.
            </p>
            <div className="button-container">
              <button className="d-none btn-contact d-lg-block">
                Contact me!!
              </button>
            </div>
          </Col>

          <Col
            lg={5}
            className="mb-3 img-container  d-lg-flex flex-column justify-content-center"
          >
            <img className="img-fluid" src={personImg} alt="" />

            <div className="homeButtomText">
              <div className="homeButtomBox"></div>
              <p className="secondary-color m-0">
                Currently working as a
                <span className="text-white spanHomeButtonText">
                  {" "}
                  Web Developer
                </span>
              </p>
            </div>
          </Col>
          <Col lg={12} className="d-none d-lg-block mt-5 quote-message">
            <figure class="text-center d-lg-flex flex-column justify-content-center">
              <blockquote class="blockquote">
                <p>
                  "The only way to learn a new programming language is by
                  writing programs in it."
                </p>
              </blockquote>
              <figcaption class="blockquote-footer mb-0">
                <cite title="Source Title">Dennis Ritchie</cite>
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainHome;
