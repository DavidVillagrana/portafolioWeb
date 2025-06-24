import portafolioImage from "../../assets/images/ImagePortafolio.png"; //De esta manera se mandan a llamar las imagenes
import { FaExternalLinkAlt } from "react-icons/fa";

/* Ejemplo de como poner los proyectos una vez los tengas listos en tu portafolio de proyectos y 
quieras agregarlos a tu portafolio web */
const projectsFront = [
  /* {
    id: 1,
    title: "Portafolio Web",
    description:
      "Sitio web de portafolio profesional creado con React para la estructura y Tailwind CSS para el diseño responsivo.",
    image: portafolioImage, //De esta manera tendremos nuestra imagen lista para usarla en nuetras tarjetas de proyectos
    tags: ["React", "TaildwindCSS"],
    githubUrl: "#",
  }, */
];

function BackEndProjects() {
  return (
    <div className="px-6">
      <section id="projectsFront" className="py-10 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center mb-4">
            <span className="inline-block text-3xl md:text-4xl font-bold text-gray-300 underline transition-transform hover:scale-110 hover:text-cyan-300">
              Proyectos<span className="text-cyan-300"> Backend</span>
            </span>
          </h2>

          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Aplicaciones que enfocan la lógica del lado del servidor, el manejo
            de datos y la construcción de APIs robustas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectsFront.length > 0 ? (
              projectsFront.map((project) => (
                <div
                  key={project.id}
                  className="group bg-blue-950 rounded-lg overflow-hidden shadow-xs card-hover border transition-transform hover:scale-105 hover:bg-blue-900"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-cyan-700 text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl text-center font-semibold mb-1 text-blue-100 transition-transform hover:scale-110 hover:text-blue-300">
                      {project.title}
                    </h3>
                    <p className="text-center text-sm mb-4 text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-cyan-500 transition-colors duration-300 px-2 py-0"
                          >
                            <FaExternalLinkAlt className="text-xl" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex items-center justify-center h-48">
                <span className="text-gray-300 text-lg font-semibold">
                  Sección en desarrollo. Nuevos proyectos serán añadidos pronto.
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
export default BackEndProjects;
