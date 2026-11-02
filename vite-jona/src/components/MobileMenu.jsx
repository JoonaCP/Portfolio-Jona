import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import GridLines from "./GridLines";
import { useDialog } from "../hooks/useDialog";

// Los títulos aparecen difuminados mientras se dibujan las líneas
function MenuItem({ delay, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function MobileMenu({ open, onClose, onOpenPanel }) {
  const menuRef = useDialog(open, onClose);
  const itemClass =
    "text-2xl font-plus text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition relative";

  return (
    <nav
      ref={menuRef}
      id="mobile-menu"
      aria-label="Main"
      inert={!open}
      className={`fixed inset-0 z-menu overflow-hidden bg-white dark:bg-darkBg transition-opacity duration-300 ease-in-out md:hidden
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* La columna de títulos mide 192px y está centrada: las líneas se ubican desde el medio */}
            <GridLines
              horizontal={[
                { top: "calc(50% - 66px)", delay: 0.1 },
                { top: "calc(50% + 14px)", delay: 0.3 },
                { top: "calc(50% + 96px)", delay: 0.5 },
              ]}
              vertical={[{ left: "48px", delay: 0 }]}
            />

            <div className="relative flex flex-col items-center gap-12">
              <MenuItem delay={0.3}>
                <Link to="/works" onClick={onClose} className={itemClass}>
                  WORKS
                </Link>
              </MenuItem>
              <MenuItem delay={0.5}>
                <button type="button" onClick={() => onOpenPanel("about")} className={itemClass}>
                  ABOUT
                </button>
              </MenuItem>
              <MenuItem delay={0.7}>
                <button type="button" onClick={() => onOpenPanel("contact")} className={itemClass}>
                  CONTACT
                </button>
              </MenuItem>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default MobileMenu;
