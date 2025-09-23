import { IoMdDownload } from "react-icons/io";
const AboutBtn = () => {

  // Esta funcion solo se ejecutara cuando la funcion onclick exista en el boton (opcional dejarla o eliminarla)
  function avisoBoton() {
    alert("Falta el curriculum en sistema")
  }


  return (
    <a   /*Recuerda que tu curriculum o archivo .pdf tiene que estar dentro de la carpeta public para que el boton funcione de manera correcta */
      href="/CV_DavidVillagrana.pdf" /*Ruta donde estara tu curriculum para poder descargarlo */
      download="DavidVillagranaCV.pdf"  //Una vez tengas el curriculum quita las // de la palabra download para habilitar la funcion de descarga
      //onClick={avisoBoton} //Una vez tengas el curriculum puedes eliminar esta funcion onClick o comentarla con //
      className="flex items-center gap-2 bg-yellow-600 text-black px-4 py-3 rounded-full text-sm font-medium shadow-md cursor-default transition hover:bg-yellow-400 hover:scale-110"
    >
      <IoMdDownload />
      Descargar currículum
    </a>
  );
};

export default AboutBtn;
