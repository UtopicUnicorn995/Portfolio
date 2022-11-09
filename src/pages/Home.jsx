import HomeProjects from "../components/HomeProjects";
import MainHome from "../components/MainHome";
import HomeSkills from "../components/HomeSkills";
import HomeAbout from "../components/HomeAbout";
import HomeContact from "../components/HomeContact";

function Home() {
  return (
    <>
      <div className="homepage ">
        <MainHome />
        <HomeProjects />
        <HomeSkills />
        <HomeAbout />
        <HomeContact />
      </div>
    </>
  );
}

export default Home;
