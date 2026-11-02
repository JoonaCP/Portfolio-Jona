import { Link } from "react-router-dom";

export function Underline() {
  return (
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black dark:bg-white transition-[width] duration-300 group-hover:w-full"></span>
  );
}

// gridAligned: en la grilla de 5 columnas, WORKS va en la cuarta y ABOUT y CONTACT en la quinta
function NavLinks({ onOpenPanel, gridAligned = false }) {
  const buttonClass =
    "relative group text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition";
  const position = gridAligned
    ? "right-4 lg:right-0 lg:left-[60%] lg:grid lg:grid-cols-2 lg:justify-items-center"
    : "right-4 lg:right-8 xl:right-[8.33%]";

  return (
    <nav
      aria-label="Main"
      className={`hidden md:flex absolute top-0 h-[67px] items-center ${position} z-nav gap-4 lg:gap-7 xl:gap-8 text-base lg:text-lg xl:text-xl text-black dark:text-white font-plus font-light`}
    >
      <Link to="/works" className="relative group">
        WORKS
        <Underline />
      </Link>
      <div className="flex gap-4 lg:gap-7 xl:gap-8">
        <button type="button" onClick={() => onOpenPanel("about")} className={buttonClass}>
          ABOUT
          <Underline />
        </button>
        <button type="button" onClick={() => onOpenPanel("contact")} className={buttonClass}>
          CONTACT
          <Underline />
        </button>
      </div>
    </nav>
  );
}

export default NavLinks;
