import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center text-center">
      <Row>
        <Col xs={12}>
          <h1 className="text-white">
            <span className="primary-color">404 </span>Page not found
          </h1>
        </Col>
        <Col xs={12}>
          <p className="secondary-color">
            You may not have access to the resouces or the Link you have entered
            is invalid
          </p>
        </Col>
        <Col>
          <Link>
            <div className="btn btn-text text-secondary border-secondary rounded-0 card-button">
              go to Homepage
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default PageNotFound;
