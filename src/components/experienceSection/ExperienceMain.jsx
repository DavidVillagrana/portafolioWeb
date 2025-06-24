import ExperienceText from "./ExperienceText";

function ExperienceMain() {
  return (
    <section id="experience" className="py-6 px-6">
      <header className="text-left mb-10">
        <h2 className="text-6xl text-gray-200">
          <span className="inline-block transition-transform hover:scale-110 hover:text-cyan-400">
            Experiencia
          </span>
        </h2>
      </header>
      <ExperienceText />
    </section>
  );
}

export default ExperienceMain;
