import { Container } from "react-bootstrap";
import HomeContact from "../components/HomeContact";
import { useEffect, useState } from "react";

function Contact() {
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    setIsContactPage(true);
    console.log(isContactPage);
  }, [isContactPage]);

  return (
    <Container className="secondary-color mt-5 pt-3">
      <Container className="my-4">
        <h3 className="text-hover mt-3 text-white">
          <span className="primary-color">/</span>contacts
        </h3>
        <p>How to reach me?</p>
      </Container>
      <HomeContact
        isContactPage={isContactPage}
        setIsContactPage={setIsContactPage}
      />
    </Container>
  );
}

export default Contact;
