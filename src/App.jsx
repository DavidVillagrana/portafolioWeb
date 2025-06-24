import "./App.css";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navar/NavbarMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import AboutMeMain from "./components/aboutSection/AboutMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import EducationMain from "./components/educationSection/EducationMain";

function App() {
  return (
    <body className="body-gradient max-w-screen-xl mx-auto min-h-dvh">
      <main className="font-body">
        <NavbarMain />
        <HeroMain />
        <AboutMeMain />
        <SkillsMain />
        <ExperienceMain />
        <ProjectsMain />
        <EducationMain />
      </main>
    </body>
  );
}

export default App;
