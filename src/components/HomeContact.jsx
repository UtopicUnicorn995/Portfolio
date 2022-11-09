import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function HomeContact() {
  return (
    <Container className="my-lg-5">
      <Row>
        <Col xs={12} className="mb-4 mb-lg-0 ">
          <div className="position-relative">
            <h1 className="secondary-color projects-h1 d-inline position-relative pe-3">
              <span className="primary-color">#</span>Contacts
            </h1>
            <div className="skills-line position-absolute"></div>
          </div>
        </Col>
      </Row>
      <Row className="p-3">
        <Col
          xs={12}
          lg={6}
          className="d-flex my-3 justify-content-center align-items-center text-secondary"
        >
          <p className="w-75 text-hover ">
            I&#39;m interested in freelance and full-time opportunities.
            However, if you have other request or question, don&#39;t hesitate
            to contact me
          </p>
        </Col>
        <Col xs={12} lg={6}>
          <div className="messageMeDiv border border-secondary d-flex flex-column justify-content-center align-items-center py-3 text-secondary">
            <h4 className="text-hover ">Message me here</h4>
            <p>
              <a
                href="mailto:ChristianBarrios995@gmail.com"
                className="text-hover "
              >
                <FaEnvelope /> ChristianBarrios995@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+639615281824" className="text-hover ">
                <FaPhoneAlt /> 09615281824
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeContact;
