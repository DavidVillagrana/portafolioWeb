import portafolioImage from "../../assets/images/ImagePortafolio.png"; //Ruta de donde se manda a llamar la imagen para tu proyecto
import calculatorImage from "../../assets/images/imageCalculator.png";
import anthillImage from "../../assets/images/imageAnthill.png";
import { FaExternalLinkAlt } from "react-icons/fa";

/* Ejemplo de como poner los proyectos una vez los tengas listos en tu portafolio de proyectos y 
quieras agregarlos a tu portafolio web */
const projectsFront = [
  {
    id: 1,
    title: "Portafolio Web",
    description:
      "Sitio web de portafolio profesional creado con React para la estructura y Tailwind CSS para el diseño responsivo.",
    image: portafolioImage, //Imagen de tu proyecto
    tags: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/davidVillagrana/PortafolioWeb", //Coloca la URL real del proyecto
  },
];

/*Estilos utilizados para nuestros tags o tecnoligias en nuestras tarjetas de proyectos
aqui puedes agregar estilos personalizados para que los tags de tus proyectos
sean dinamicos y que cada uno tenga su propio estilo para personalizar tus tarjetas de proyectos */
const tagStyles = {
  React: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white",
  TailwindCSS: "bg-gradient-to-r from-teal-400 to-cyan-500 text-white",
  JavaScript: "bg-gradient-to-r from-yellow-300 to-yellow-500 text-black",
  NodeJS: "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
  MongoDB: "bg-gradient-to-r from-emerald-400 to-green-600 text-white",
  CSS: "bg-gradient-to-r from-purple-900 via-purple-600 to-purple-300 text-white",
  HTML: "bg-gradient-to-r from-orange-900 via-orange-600 to-orange-300 text-white",
};

function Projects() {
  return (
    <div className="px-6">
      <section id="projectsFront" className="py-10 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center mb-4">
            <span className="inline-block text-3xl md:text-4xl font-bold text-gray-300 underline transition-transform hover:scale-110 hover:text-cyan-300">
              Proyectos
              <span className="text-cyan-300"> Principales</span>
            </span>
          </h2>

          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Proyectos principales como Desarrollador Full Stack. Son
            aplicaciones completas que integran frontend y backend, construidas
            con tecnologías modernas y enfocadas en resolver problemas reales.
            Aquí muestro mi capacidad para diseñar, desarrollar y desplegar
            soluciones funcionales de principio a fin.
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
                      {project.tags.map((tag, index) => {
                        const tagClass =
                          tagStyles[tag] || "bg-gray-500 text-white"; // fallback por si no está definido
                        return (
                          <span
                            key={index}
                            className={`px-2 py-1 text-xs font-medium rounded-full shadow-md ${tagClass}`}
                          >
                            {tag}
                          </span>
                        );
                      })}
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
              <div className="col-span-full flex items-center justify-center h-40 bg-gray-800 text-gray-300 rounded-lg shadow">
                <span className="text-center text-lg font-medium px-4">
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

export default Projects;
