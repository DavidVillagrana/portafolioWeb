import FullStackProjects from "./FullStackProjects";
import PracticeProjects from "./PracticeProjects";

function ProjectsMain() {
  return (
    <div id="projects" className="py-6 px-6">
      <div className="text-left">
        <h2 className="text-6xl text-gray-200 mb-10">
          <span className="inline-block transition-transform hover:scale-110 hover:text-cyan-400">
            Proyectos
          </span>
        </h2>
        <FullStackProjects />
        <PracticeProjects />
      </div>
    </div>
  );
}

export default ProjectsMain;
