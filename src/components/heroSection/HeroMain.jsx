import imagenUser from "../../assets/images/imagen_David_ing.png"; //Ruta de donde traer tu imagen principal del portafolio
import sprite from "../../assets/sprite.svg";
import { PiHexagonThin } from "react-icons/pi";

const HeroMain = () => {
  return (
    <div className="pt-25 pb-16" id="index">
      <header className="flex flex-col justify-center items-center mb-4 relative">
        <div className="absolute inset-0 -z-10 flex justify-center items-center animate-pulse">
          <PiHexagonThin className="md:h-[80%] sm:h-[100%] min-h-[450px] w-auto text-cyan-400 blur-md animate-[spin_20s_linear_infinite]" />
        </div>
        <img
          src={imagenUser} /*Aqui mandamos a llamar nuestra imagen importada*/
          alt="User index"
          className="h-[50vh] object-cover mask-radial-at-center mask-radial-from-45% mask-radial-to-80% relative z-10"
        />
        <h1 className="text-3xl font-light leading-tight mt-8 sm:mt-10 font-display animate-vibrant-color">
          David Alejandro Villagrana Valencia {/*Aquí va tu nombre completo*/}
        </h1>
      </header>

      <section className="flex gap-2 justify-center">
        <a
          className="p-2 size-12 sm:size-16 flex items-center justify-center
                    rounded-full hover:scale-110 transition-transform
                    animate-slide-up-fade animate-delay-200 bg-gradient-to-tr
                    from-yellow-300 via-pink-500 to-purple-600"
          href="https://www.instagram.com/thedavee.v/" //Puedes poner tu URL de tu perfil de Instagram
          target="_blank"
          aria-label="instagram"
          title="Ir a istagram"
        >
          <svg>
            <use xlinkHref={`${sprite}#instagram`} />
          </svg>
        </a>
       {/*  <a
          className="p-2 size-12 sm:size-16 flex items-center justify-center
                    rounded-full hover:scale-110 transition-transform
                    animate-slide-up-fade animate-delay-200 bg-gradient-to-tr
                    from-gray-500 via-gray-800 to-gray-950"
          href="https://x.com/" //Puedes poner tu URL de tu perfil de Twitter ( X )
          target="_blank"
          aria-label="x"
          title="Ir a X"
        >
          <svg>
            <use xlinkHref={`${sprite}#x`} />
          </svg>
        </a> */}
        {/* <a
          className="p-2 size-12 sm:size-16 flex items-center justify-center
                    rounded-full hover:scale-110 transition-transform
                    animate-slide-up-fade animate-delay-200 bg-gradient-to-tr
                    from-red-100 via-red-300 to-red-700"
          href="https://www.youtube.com/" //Puedes poner tu URL de tu perfil de YouTube
          target="_blank"
          aria-label="youtube"
          title="Ir a YouTube"
        >
          <svg>
            <use xlinkHref={`${sprite}#youtube`} />
          </svg>
        </a> */}
        <a
          className="p-2 size-12 sm:size-16 flex items-center justify-center
                    rounded-full hover:scale-110 transition-transform
                    animate-slide-up-fade animate-delay-200 bg-gradient-to-tr
                    from-blue-100 via-blue-200 to-blue-400"
          href="https://www.linkedin.com/in/david-alejandro-villagrana-valencia-a19996365/" //Puedes poner tu URL de tu perfil de LinkedIn
          target="_blank"
          aria-label="linkedin"
          title="Ir a Linkedin"
        >
          <svg>
            <use xlinkHref={`${sprite}#linkedin`} />
          </svg>
        </a>
        <a
          className="p-2 size-12 sm:size-16 flex items-center justify-center
                    rounded-full hover:scale-110 transition-transform
                    animate-slide-up-fade animate-delay-200 bg-gradient-to-tr
                    from-gray-500 via-gray-700 to-gray-900"
          href="https://github.com/DavidVillagrana" //Puedes poner tu URL de tu perfil de GitHub
          target="_blank"
          aria-label="github"
          title="Ir a GitHub"
        >
          <svg>
            <use xlinkHref={`${sprite}#github`} />
          </svg>
        </a>
      </section>
      <p className="text-white text-center mt-4 text-sm px-2 text-balance">
        Desarrollador Full Stack enfocado en construir aplicaciones web
        modernas, desde sitios informativos hasta plataformas completas.
      </p>
    </div>
  );
};

export default HeroMain;
