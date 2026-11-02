import { motion } from "framer-motion";

// Distancia entre barras: 1.5px de alto + 6px de separación
const OFFSET = 7.5;
const STEP = 0.16;
const EASE = [0.76, 0, 0.24, 1];

function MenuButton({ open, onClick, label, className = "", ...props }) {
  const bar = "block h-[1.5px] w-6 bg-black dark:bg-white";

  // Al abrir, las barras primero se juntan y después giran; al cerrar, al revés
  const barTransition = {
    y: { duration: STEP, ease: EASE, delay: open ? 0 : STEP },
    rotate: { duration: STEP, ease: EASE, delay: open ? STEP : 0 },
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`w-11 h-11 flex flex-col items-center justify-center gap-[6px] rounded-full text-black dark:text-white active:scale-95 transition ${className}`}
      {...props}
    >
      <motion.span
        className={bar}
        initial={false}
        animate={{ y: open ? OFFSET : 0, rotate: open ? 45 : 0 }}
        transition={barTransition}
      />
      <motion.span
        className={bar}
        initial={false}
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0, delay: STEP }}
      />
      <motion.span
        className={bar}
        initial={false}
        animate={{ y: open ? -OFFSET : 0, rotate: open ? -45 : 0 }}
        transition={barTransition}
      />
    </button>
  );
}

export default MenuButton;
