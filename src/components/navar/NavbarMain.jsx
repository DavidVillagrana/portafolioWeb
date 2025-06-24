import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

const NavbarMain = () => {
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  items-center py-2 px-6 rounded-r-full rounded-l-full border  bg-white/5 backdrop-blur-sm transition hover:bg-white/20">
        <NavbarLogo />
        <NavbarLinks />
      </div>
    </nav>
  );
};

export default NavbarMain;
