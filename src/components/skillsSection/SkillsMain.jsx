import SkillsCards from "./SkillsCards";

/* Para agregar más  tarjetas de habilidades a nuestra sección de Skills 
solamente tenemos que agregar más arreglos en esta parte del código, según
el orden en el cual se escriba será el orden a mostrar en la plataforma web
 */
const skills = [
  {
    name: "JavaScript", //Título  itulo de nuestra card
    icon: "javascript", //ASEGURATE QUE EL ID DEL ICONO SEA EL MISMO QUE SE TIENE EN EL sprite.svg
    bgGradient: "linear-gradient(to bottom right, #b45309, #f59e0b, #fef3c7)", //Colores de nuestra card
    badgePosition: "top-left", //Posicion de nuestro título de nuestra card
    svgSize: 90, //Tamaño de nuestro icono SVG
  },
  {
    name: "React.js", 
    icon: "react",
    bgGradient: "linear-gradient(to bottom right, #164e63, #0e7490, #06b6d4)",
    badgePosition: "bottom-left",
    /* NOTA: por defecto nuestro "svgSize" ya tiene un tamaño predeterminado de 100, pero si ocupas manejar otro tamaño puedes manipularlo
    como se ve en el objeto superior  donde usamos un tamaño de 90 */
  },
  {
    name: "Node.js",
    icon: "node",
    bgGradient: "linear-gradient(to bottom right, #065f46, #16a34a, #6ee7b7)",
  },
  {
    name: "HTML",
    icon: "html",
    bgGradient: "linear-gradient(to bottom right, #7c2d12, #ea580c, #fdba74)",
    badgePosition: "bottom-left",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    bgGradient:
      "linear-gradient(to bottom right, #142c41, #1e46a6, #54b7e9, #a2e1ff)",
    badgePosition: "top-left"
  },
  {
    name: "CSS",
    icon: "css",
    bgGradient: "linear-gradient(to bottom right, #4c1d95, #9333ea, #d8b4fe)",
    badgePosition: "bottom-left",
  },
  {
    name: "Git",
    icon: "git",
    bgGradient: "linear-gradient(to bottom right, #000, #ea580c, #fdba74)",
    badgePosition: "bottom-left",
    svgSize: 150,
  },
  {
    name: "GitHub",
    icon: "github",
    bgGradient: "linear-gradient(to bottom right, #000, #4b5563, #d1d5db)",
    badgePosition: "top-left",
    svgSize: 95,
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    bgGradient:
      "linear-gradient(to bottom right, #1e3a8a, #0d687f, #0d7f0d, #052e16)",
    badgePosition: "bottom-left",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    bgGradient: "linear-gradient(to bottom right, #0369a1, #38bdf8, #bae6fd)",
    badgePosition: "top-left",
    svgSize: 130,
  },
  {
    name: "Hero UI",
    icon: "heroui",
    bgGradient: "linear-gradient(to bottom right, #000, #7c3aed, #c4b5fd)",
    badgePosition: "bottom-left",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
    bgGradient: "linear-gradient(to bottom right, #0284c7, #7dd3fc, #e0f2fe)",
    badgePosition: "top-left"
  },
];

const SkillsMain = () => {
  return (
    <main id="skills" className="py-6 px-6">
      <div className="text-left">
        <h2 className="text-6xl text-gray-200 mb-10">
          <span className="inline-block transition-transform hover:scale-110 hover:text-cyan-400">
            Hard Skills
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {skills.map((skill, index) => (
          <SkillsCards key={index} {...skill} />
        ))}
      </div>
    </main>
  );
};

export default SkillsMain;
