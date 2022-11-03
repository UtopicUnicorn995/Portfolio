import personImg from "../assets/person.png";

function Home() {
  return (
    <div className="homepage ">
      <div className="container  justify-content-center align-items-center ">
        <h1 className="homeH1 mb-3 mt-2">
          Ian is a <span className="color-primary">Full-Stack developer</span>{" "}
          and
          <span className="color-primary"> React Native developer</span>
        </h1>

        <p className="secondary-color">
          He crafts responsive websites and user friendly mobile apps where
          technologies meet creativity.
        </p>
        <div className="mb-3 img-container  justify-content-center align-items-center">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
