import HomeProjects from "../components/HomeProjects";
import MainHome from "../components/MainHome";

function Home() {
  return (
    <>
      <div className="homepage ">
        <MainHome />
        <HomeProjects />
      </div>
    </>
  );
}

export default Home;
