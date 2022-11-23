import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

function HomeContact({ isContactPage }) {
  return (
    <Container className="my-lg-5">
      {!isContactPage ? (
        <Row>
          <Col xs={12} className="mb-4 mb-lg-0 ">
            <div className="position-relative">
              <h1 className="text-white projects-h1 d-inline position-relative pe-3">
                <span className="primary-color">#</span>Contacts
              </h1>
              <div className="skills-line position-absolute"></div>
            </div>
          </Col>
        </Row>
      ) : (
        " "
      )}

      <Row className="p-3">
        <Col
          xs={12}
          lg={6}
          className="d-flex my-3 justify-content-center align-items-center text-secondary"
        >
          <p className="w-75 text-hover ">
            I&#39;m interested in freelance and full-time opportunities.
            However, if you have other request or question, please don&#39;t
            hesitate to contact me.
          </p>
        </Col>
        <Col xs={12} lg={6}>
          <div className="messageMeDiv border border-secondary d-flex flex-column justify-content-center align-items-center py-3 text-secondary">
            <h4 className="text-hover ">Message me here</h4>
            <p className=" fs-xs">
              <a
                href="mailto:ChristianBarrios995@gmail.com"
                className="links-hover"
              >
                <FaEnvelope className="d-none d-sm-inline" />{" "}
                ChristianBarrios995@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+639615281824" className="links-hover ">
                <FaPhoneAlt /> 09615281824
              </a>
            </p>
          </div>
        </Col>
      </Row>
      {isContactPage ? (
        <Row>
          <Col xs={12} className="mt-5 mb-3 mb-lg-4 ">
            <div className="position-relative">
              <h3 className="text-white  d-inline pe-3">
                <span className="primary-color">#</span>all-media
              </h3>
            </div>
          </Col>
          <Col xs={12} className=" mb-lg-0 ">
            <Row>
              <Col xs={12} sm={6} lg={3} className="links-hover">
                {" "}
                <FaGithub /> @utopicUnicorn995{" "}
              </Col>
              <Col xs={12} sm={6} lg={3} className="links-hover">
                {" "}
                <FaGithub /> @utopicUnicorn{" "}
              </Col>
              <Col xs={12} sm={6} lg={3} className="links-hover">
                <FaWhatsapp /> +639615281824
              </Col>
              <Col xs={12} sm={6} lg={3} className="links-hover">
                <FaLinkedin /> christian-barrios-09a427245
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </Container>
  );
}

export default HomeContact;
