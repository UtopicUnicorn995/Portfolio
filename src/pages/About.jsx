import Container from "react-bootstrap/esm/Container";

function About() {
  return (
    <Container>
      <div>
        <img src={require("../assets/avatar.png")} alt="" />
      </div>
    </Container>
  );
}

export default About;
