import educationImage from "../../assets/images/educacionFondo.png"; //Ruta para poder llamar la imagen que quieras poner en tu fonde de educacion (opcional)

function EducationMain() {
  return (
    <div id="education" className="py-6 px-6">
      <div className="text-left">
        <h2 className="text-6xl text-gray-200 mb-10">
          <span className="inline-block transition-transform hover:scale-110 hover:text-cyan-400">
            Educación Academica
          </span>
        </h2>
      </div>
      <div className="relative group max-w-xl mx-auto rounded-xl overflow-hidden shadow-md  hover:shadow-lg transition duration-300 hover:scale-110 hover:border hover:bg-gray-800">
        {/* Imagen de fondo, Aparece en hover con opacidad */}
        <img
          src={educationImage} //Aqui se manda a llamar la imagen importada
          alt="Fondo de imagen de educacion"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-25 transition-opacity duration-500"
        />

        {/* Contenido del texto */}
        <div className="relative z-10 p-6 space-y-3 text-left">
          <h2 className="mt-4 text-md px-2 text-white italic">
            Instituto Tecnológico de Zacatecas
          </h2>
          <p className="text-2xl font-bold text-white italic">
            Ingeniería en Sistemas Computacionales | Agosto 2018 - septiembre
            2023
          </p>
          <ul className="list-disc mt-4 text-md px-2 text-balance text-white">
            <li>Titulado.</li>
            <li>
              Residencias profesionales: desarrollo de un chatbot en JavaScript
              para apoyo a estudiantes con síntomas de depresión integrado con
              WhatsApp Web.
            </li>
            <li>
              Participación en simposio de alto nivel en desarrollo de software
            </li>
            <li>
              Curso obligatorio de inglés completado (nivel básico-intermedio).
            </li>
          </ul>
          <p className="mt-4 text-md px-2 text-white italic">
            Parte del Tecnológico Nacional de México (TECNM).
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationMain;
