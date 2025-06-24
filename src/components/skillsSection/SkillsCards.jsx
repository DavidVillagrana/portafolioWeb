import sprite from "../../assets/sprite.svg";

const SkillsCards = ({
  name,
  icon,
  experience,
  bgGradient,
  badgePosition = "top-left",
  svgSize = 100,
}) => {
  
  const badgePositionClasses =
    badgePosition === "top-left"
      ? "bottom-2 left-2"
      : badgePosition === "bottom-left"
      ? "top-2 left-2"
      : badgePosition === "top-right"
      ? "bottom-2 left-2"
      : "bottom-2 left-2";

  return (
    <div
      className={`relative rounded-3xl overflow-hidden border border-cyan-900 flex flex-col items-start hover:scale-105 hover:contrast-125 transition group col-span-1 p-7 min-h-[120px]`}
      style={{
        backgroundImage: bgGradient?.startsWith("linear")
          ? bgGradient
          : undefined,
      }}
      {...(!bgGradient?.startsWith("linear") && { className: bgGradient })}
    >
      <span
        className={`absolute ${
          badgePosition.includes("bottom") ? "bottom-2" : "top-2"
        } ${badgePosition.includes("left") ? "left-2" : "right-2"} font-bold text-2xl text-white group-hover:-translate-y-1 transition-transform z-10`}
      >
        {name}
      </span>
      <svg
        className="text-white absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-12 group-hover:scale-125 transition-transform z-0"
        width={svgSize}
        height={svgSize}
      >
        <use xlinkHref={`${sprite}#${icon}`} />
      </svg>
      <div
        className={`absolute ${badgePositionClasses} text-white text-sm bg-opacity-80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30`}
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.6)`,
        }}
      >
        {experience}
      </div>
    </div>
  );
};


export default SkillsCards;