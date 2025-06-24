function ExperienceText() {
  return (
    <section className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <article className="px-2">
        <h3 className="text-2xl text-gray-200 mb-2 italic transition-transform hover:underline">
          Desarrollador Web Full Stack (Remoto) | Make DigitAll – Sistema Maestro
          de Ventas
        </h3>

        <p className="text-md text-gray-200 mb-2 italic">
          📍 Monterrey, Nuevo León | 🗓️ Marzo 2023 – Febrero 2024 (Parcial)
        </p>
        <p className="text-md text-gray-300 mb-4 italic">
          Sistema Maestro de Ventas es una plataforma web para la gestión de
          ventas, inventario y clientes, utilizada por equipos comerciales en
          tiempo real.
        </p>

        <p className="mt-4 text-md mb-4 text-gray-100">
          Desarrollé y mantuve una plataforma de ventas desde el front-end hasta
          el back-end, trabajando en un equipo ágil con metodología Scrum. En este
          proyecto utilicé herramientas modernas para asegurar una experiencia de
          usuario fluida y un sistema escalable.
        </p>

        <div className="text-md text-cyan-300 italic mb-1">
          🔧 Tecnologías:
        </div>
        <p className="text-gray-300 mb-4">
          React · Vite · Node.js · PostgreSQL · JavaScript · GitHub · REST APIs
        </p>

        <div className="text-md text-cyan-300 italic mb-2">
          ✅ Principales contribuciones:
        </div>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>Implementé servicios back-end escalables con Node.js.</li>
          <li>
            Desarrollé interfaces modernas en React con Vite, mejorando la
            velocidad de desarrollo mediante HMR.
          </li>
          <li>
            Diseñé y optimicé APIs RESTful para integración con plataformas
            externas.
          </li>
          <li>
            Administré la base de datos en PostgreSQL, asegurando rendimiento y
            estabilidad.
          </li>
          <li>
            Utilicé Git y GitHub para flujos de trabajo colaborativos en sprints
            ágiles.
          </li>
          <li>
            Participé en reuniones diarias (dailies) y actividades Scrum para
            mantener la alineación del equipo.
          </li>
        </ul>
      </article>
    </section>
  );
}

export default ExperienceText;
