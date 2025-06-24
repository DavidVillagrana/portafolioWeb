import AboutMeText from "./AboutMeText";
import AboutMeImg from "./AboutMeImg";

function AboutMeMain() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 px-4 max-w-[1200px] mx-auto mt-[100px]">
      <AboutMeText />
      <AboutMeImg />
    </div>
  );
}

export default AboutMeMain;
