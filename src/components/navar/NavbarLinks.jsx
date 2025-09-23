import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const links = [
  { link: "Inicio", section: "index" },
  { link: "Acerca de Mi", section: "about" },
  { link: "Experiencia", section: "experience" },
  { link: "Proyectos", section: "projects" },
  { link: "Educacion", section: "education" },
];

const NavbarLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  // FUNCION PARA CERRAR EL MODAL SI SE HACE CLIC FUERA DE EL
  useEffect(() => {
    const handleClickOut  = (e) =>{
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOut );
    return () => document.removeEventListener("mousedown", handleClickOut );
  }, [isOpen]);

  return (
    <nav className="p-4 relative">
      {/* Desktop navigation */}
      <ul className="hidden md:flex gap-6 text-white font-bold">
        {links.map((link, index) => (
          <li key={index} className="group">
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="hover:text-cyan-400 transition-all duration-300"
            >
              {link.link}
            </Link>
            <div className="h-[2px] w-0 group-hover:w-full bg-cyan-400 transition-all duration-300"></div>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger button */}
      <div className="md:hidden flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl transition-transform hover:text-cyan-400"
        >
          ☰
        </button>
      </div>

      {/* Mobile modal */}
      {isOpen && (
        <div className="fixed inset-0  flex items-start justify-end pt-20 pr-4 z-50 ">
          <div
            ref={modalRef}
            className="bg-gradient-to-b from-gray-900 via-slate-800 to-slate-700 bg-opacity-90 backdrop-blur-md p-6 rounded-lg shadow-lg w-[250px] max-w-[250px] text-white"
          >
            <ul className="flex flex-col gap-4 font-bold">
              {links.map((navItem, index) => (
                <li key={index}>
                  <Link
                    to={navItem.section}
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-130}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  >
                    {navItem.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarLinks;
