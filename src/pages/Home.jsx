import HomeProjects from "../components/HomeProjects";
import MainHome from "../components/MainHome";
import HomeSkills from "../components/HomeSkills";
import HomeAbout from "../components/HomeAbout";

function Home() {
  return (
    <>
      <div className="homepage ">
        <MainHome />
        <HomeProjects />
        <HomeSkills />
        <HomeAbout />
      </div>
    </>
  );
}

export default Home;
