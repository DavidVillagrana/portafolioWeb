import AboutBtn from "./AboutBtn";

function AboutMeText() {
  const softSkills = [
    "Puntual",
    "Confidente",
    "Trabajo en equipo",
    "Respetuoso",
    "Responsable",
    "Facilidad de aprendizaje",
    "Orientación al detalle",
    "Capacidad para capacitar",
  ];

  return (
    <div
      id="about"
      className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center max-w-[900px] w-full"
    >
      <h2 className="text-6xl text-gray-200 mb-10 hover:text-cyan-400 hover:scale-110 transition-transform">
        Quién soy
      </h2>

      <p className="mt-4 text-md px-2 text-balance text-white">
        Soy desarrollador Full Stack con enfoque en el ecosistema JavaScript,
        especializado en la creación de aplicaciones web eficientes, escalables
        y con interfaces modernas. Tengo experiencia trabajando con tecnologías
        como React, Node.js, Tailwind CSS, TypeScript, PostgreSQL y MongoDB. He
        participado en proyectos de desarrollo web desde el diseño hasta el
        despliegue en producción, colaborando en equipos ágiles bajo
        metodologías como Scrum.
      </p> 

      <p className="mt-6 px-2 text-white font-semibold">
        Además, destaco por mis habilidades interpersonales y profesionales:
      </p>

      <div className="flex flex-wrap gap-3 mt-3 px-2">
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md cursor-default transition hover:bg-blue-700 hover:scale-110"
          >
            {skill}
          </span>
        ))}
      </div>

       <div className="flex flex-wrap gap-3 mt-3 px-2">
        <AboutBtn />
      </div>
    </div>
  );
}

export default AboutMeText;
