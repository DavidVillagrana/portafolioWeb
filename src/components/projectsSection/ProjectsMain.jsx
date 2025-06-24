import FrontEndProjects from "./FrontEndProjects";
import BackEndProjects from "./BackEndProjects";
import FullStackProjects from "./FullStackProjects";
import AdvancedProjects from "./AdvancedProjects";

function ProjectsMain() {
  return (
    <div id="projects" className="py-6 px-6">
      <div className="text-left">
        <h2 className="text-6xl text-gray-200 mb-10">
          <span className="inline-block transition-transform hover:scale-110 hover:text-cyan-400">
            Proyectos
          </span>
        </h2>
        <FrontEndProjects />
        {/* DESCOMENTAR LINEAS DE CODIGO PARA ACTIVAR CADA SECCION DE PROYECTOS */}
        {/* <BackEndProjects />
        <FullStackProjects />
        <AdvancedProjects /> */}

        {/* ESTE ES UN AVISO TEMPORAL YA QUE LOS ESPACIOS PARA LAS DEMAS SECCIONES ESTAN LISTAS PARA USAR PERO 
        SE NECESITAN IMPLEMENTAR PROYECTOS PARA QUE SE HABILITEN ESAS SECCIONES Y SE PUEDAN VIZUALIZAR EN EL PORTAFOLIO. 
        CADA ARCHIVO MUESTRA UN EJEMPLO DE COMO LLENAR UNA CARD DE UN PROYECTO (PUEDES ELIMINAR ESTA SECCION DE CODIGO SI YA NO LA NECESITAS)*/}
        <div className="flex items-center justify-center h-30 bg-gray-800 text-gray-300 rounded-lg shadow">
          <p className="text-center text-lg font-medium">
            Esta sección está en desarrollo. Nuevos proyectos y más secciones
            por categorías serán añadidas pronto.
          </p>
        </div>
        {/*FIN DE AVISO TEMPORAL (ELIMINALO SI YA NO LO NECESITAS)*/}
        

      </div>
    </div>
  );
}

export default ProjectsMain;
