import { Link, useLocation } from "react-router-dom";
import { useCallback, useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import SidePanel from "./SidePanel";

function Navbar({ gridAligned = false, centerLogo = false }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelContent, setPanelContent] = useState("");
  const location = useLocation();

  const isHome = location.pathname === "/";

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closePanel = useCallback(() => setPanelOpen(false), []);

  const openPanel = (content) => {
    setPanelContent(content);
    setPanelOpen(true);
    setMenuOpen(false); // Cerrar menú móvil si está abierto
  };

  return (
    <header>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:px-3 focus:py-2 z-modal bg-white dark:bg-darkBg text-black dark:text-white font-plus font-light"
      >
        Skip to content
      </a>

      {/* JC - Home Button - Solo visible fuera de Home */}
      {!isHome && (
        <Link
          to="/"
          aria-label="Jonathan Calistro, home"
          className={`absolute ${
            centerLogo ? "left-[16.667%] lg:left-[10%] -translate-x-1/2" : "left-[40px] md:left-8"
          } top-0 h-[67px] flex items-center font-migella text-[50px] leading-none text-black dark:text-white z-nav`}
        >
          JC
        </Link>
      )}

      {/* LIGHT / DARK Toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        className="absolute left-1/2 -translate-x-1/2 top-0 h-[67px] flex items-center px-3 text-black dark:text-white font-plus font-extralight z-nav text-lg md:text-base lg:text-xl"
      >
        {theme === "dark" ? "DARK" : "LIGHT"}
      </button>

      <NavLinks onOpenPanel={openPanel} gridAligned={gridAligned} />

      <MenuButton
        open={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        className="md:hidden absolute z-modal right-3 top-3"
      />

      <MobileMenu open={menuOpen} onClose={closeMenu} onOpenPanel={openPanel} />

      <SidePanel
        open={panelOpen}
        content={panelContent}
        onClose={closePanel}
        gridAligned={gridAligned}
      />
    </header>
  );
}

export default Navbar;
