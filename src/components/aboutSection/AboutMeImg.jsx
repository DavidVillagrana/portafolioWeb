import imgUserAbout from "../../assets/images/userImage.png"; //esta es la ruta en done pondras tu imagen para el apartado de about

function AboutMeImg() {
  return (
    <div className="relative h-[300px] w-[180px] md:h-[500px] md:w-[300px] md:self-start pl-8">
      <div className="h-[300px] w-[180px] rounded-[60px] left-[-20px] overflow-hidden absolute md:h-[500px] md:w-[300px] md:rounded-[100px]">
        <img
          src={imgUserAbout} /*Aqui mandamos a llamar la imagen importada lista para usarse*/
          alt="User About"
          className="h-full w-auto object-cover"
        />
      </div>
      <div
        className="h-[300px] w-[150px] bg-stone-200 absolute bottom-[-20px] left-[-20px] 
      rounded-bl-[70px] rounded-tr-[70px] rounded-br-[12px] rounded-tl-[12px] -z-10
      md:h-[500px] md:w-[250px] md:rounded-bl-[120px] md:rounded-tr-[120px] md:rounded-br-[20px] md:rounded-tl-[20px]"
      ></div>
    </div>
  );
}

export default AboutMeImg;
