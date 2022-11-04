import HomeProjects from "../components/HomeProjects";
import MainHome from "../components/MainHome";
import HomeSkills from "../components/HomeSkills";

function Home() {
  return (
    <>
      <div className="homepage ">
        <MainHome />
        <HomeProjects />
        <HomeSkills />
      </div>
    </>
  );
}

export default Home;
